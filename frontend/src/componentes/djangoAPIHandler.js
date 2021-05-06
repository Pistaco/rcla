import axios from "axios"
import Cookie from "js-cookie";


class djangoAPIHandler {
    constructor() {
        this.productos = new ProductosAPIHandler()
        this.auth =  new AuthTokenHandler()
    }
}

class ProductosAPIHandler {
    createProducto(data) {
        const axiosPost = genericPost("/api/create-producto")
        return axiosPost(data)
    }

    deleteProducto(id) {
        const url = `/api/delete-producto/${id}`
        const axiosPost = genericPost(url)
        return axiosPost({})
    }

    allProductos() {
        return genericGet("/api/list")
    }
}

class AuthTokenHandler {
    constructor() {
        this.path_login = "/auth/login"
        this.path_logout = "/auth/logout"
    }

    login(data) {
        const axiosPost = genericPost(this.path_login)
        return axiosPost(data)
    }

    logout() {
        return genericGet(this.path_logout)
    }
}

const genericPost = url => data => {
    const cookie = Cookie.getCookie("crsftoken")
    const configuration = {
        headers: {'X-CSRFToken': cookie}
    }
    axios.post(url, data, configuration)
}

const genericGet = url => axios.get(url).then(value => value.data)

export default new djangoAPIHandler()