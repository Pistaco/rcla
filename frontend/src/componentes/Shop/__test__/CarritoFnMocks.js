import {tracerTable} from "../../../utils";

export let carritoData = []
export const setCarritoData = value => carritoData = value

export const listaManager = {
    checkIfExist: id => carritoData.some(value => value.id === id),
    add: producto => setCarritoData([...carritoData, producto]),
    delete: producto => setCarritoData(carritoData.filter(value => value.id !== producto.id))
}

export const addToCarrito = producto => {
    const createOrSum = generalExistOrDo(sumProducto)(listaManager.add)
    createOrSum({...producto, cantidad: 0})
}
export const deleteFromCart = id => {
    const deleteOrReduce = generalExistOrDo(reduceProducto)(listaManager.delete)
    deleteOrReduce(id)
}

export const sumProducto = producto => {
    const sumar1Producto = changeCantidadProducto(producto.cantidad + 1)
    const sumarCantidadLista = modificateOneProductoInList(sumar1Producto)
    return sumarCantidadLista(producto)
}

export const reduceProducto = () => modificateOneProductoInList(changeCantidadProducto(1))

export const modificateOneProductoInList = funcion => producto => carritoData.map(value => {
    if(value.id === producto.id) {
        return funcion(producto)
    }
    return value
})

export const changeCantidadProducto = valorNuevo => value => ({
    ...value,
    cantidad: valorNuevo
})

export const generalExistOrDo = trueAlternative => falseAlternative => parametro => {
    const {id} = parametro
    if (listaManager.checkIfExist(id)) {
        setCarritoData(trueAlternative(parametro))
    } else {
        return falseAlternative(parametro)
    }
}
