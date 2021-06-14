import axios from "axios"
import Cookie from "js-cookie";


class djangoAPIHandler {
    constructor() {
        this.productos = new ProductosAPIHandler()
        this.auth =  new AuthTokenHandler()
        this.categorias = new CategoriaHandler()
        this.pedidoProcess = new PedidosProcessHandler()
    }
}

class ProductosAPIHandler {
    createProducto(data) {
        const axiosPost = genericPost("/api/producto-create")
        const form =  createForm(data)
        return axiosPost(form)
    }

    deleteProducto(id) {
        const url = `/api/producto-delete/${id}`
        const axiosPost = genericPost(url)
        axiosPost({}).catch(console.log)
    }

    getById(id) {
        const url = `/api/producto-get/${id}`
        return genericGet(url)
    }

    searchProducto(search) {
        const url = `/api/producto-search/${search}`
        return genericGet(url)
    }

    allProductos() {
        return genericGet("/api/list")
    }
}

class AuthTokenHandler {
    constructor() {
        this.path_login = "/auth/token/login"
        this.path_logout = "/auth/token/logout"
    }

    login(data) {
        const axiosPost = genericPost(this.path_login)
        return axiosPost(data)
    }

    logout() {
        return genericPost(this.path_logout)({})
    }
}

class PedidosProcessHandler {
    constructor() {
        this.mail = new EmailHandler()
        this.pedidos = new PedidosDataBaseHandler()
    }

    async doProcess(data) {
        const {direccion: {correo}} = data
        await this.mail.sendMail(correo)
        return await this.pedidos.createPedido(data)
    }
}

class CategoriaHandler {
    constructor() {
        this.path_create = "/api/categoria-create"
    }

    create(data) {
        const postAxios = genericPost(this.path_create)
        return postAxios(data)
    }

    getProductosByCategoria(data) {
        const url = `/api/categoria-search/${data}`
        return genericGet(url)
    }
}

class PedidosDataBaseHandler {
    constructor() {
        this.path_all = `/pedidos/list-pedidos/`
        this.create = `/pedidos/create`
    }

    createPedido(data) {
        const sendPedidoToDjango = genericPost(this.create)
        return sendPedidoToDjango(data)
    }

    allPedidos() {
        return genericGet(this.path_all)
    }
}

class EmailHandler {
    constructor() {
        this.path_send = "/mail/"
    }
    sendMail(data) {
        const sendEmailToDjango = genericPost(this.path_send)
        return sendEmailToDjango(data)
    }
}

const createForm = data => {
    const datosToDjangoForm = new FormData
    datosToDjangoForm.append("nombre", data.nombre.toLowerCase())
    datosToDjangoForm.append("precio", data.precio)
    datosToDjangoForm.append("descripcion", data.descripcion)
    datosToDjangoForm.append("categoria", data.categoria.toLowerCase())
    datosToDjangoForm.append("img", data.img, data.img.name)
    return datosToDjangoForm
}

const genericPost = url => data => {
    const cookie = Cookie.get("csrftoken")
    const confi = {
        headers: {'X-CSRFToken': cookie}
    }
    return axios.post(url, data, confi).then(value => value.data)
}

const genericGet = url => axios.get(url).then(value => value.data)

export default new djangoAPIHandler()