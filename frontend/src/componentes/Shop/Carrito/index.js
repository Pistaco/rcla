import {useState, createContext} from "react";

export const ContextMethods = createContext()
export const ContextData = createContext()

const CarritoProvider = ({children}) => {
    const [carritoData, setCarritoData] = useState([])

    const listaManager =  {
        checkIfExist: id => carritoData.some(value => value.producto.id === id),
        add: producto => setCarritoData([...carritoData, {producto, cantidad: 1}]),
        delete: producto => setCarritoData(carritoData.filter(value => value.producto.id !== producto.id))
    }


    const addToCarrito = producto => listaManager.checkIfExist(producto.id) ?
        sumProductoInList(producto):
        listaManager.add(producto)

    const deleteFromCart = producto => checkIfCantidadEqual1(producto.id) ?
        listaManager.delete(producto):
        reduceList(producto)

    const sumProductoInList = producto => setCarritoData(findAproductInListAndDo(sumCantidadProperty(1))(producto))

    const findAproductInListAndDo = funcion => producto => carritoData.map(value =>
        value.producto.id === producto.id ?
            funcion(value) :
            value
    )


    const reduceList = producto => setCarritoData((findAproductInListAndDo(sumCantidadProperty(-1))(producto) ))
    const checkIfCantidadEqual1 = id => carritoData.some(value => value.producto.id === id ? value.cantidad === 1: false)


    const sumCantidadProperty = numero => producto => ({
        ...producto,
        cantidad: producto.cantidad + numero
    })
    return (
        <ContextData.Provider value={carritoData}>
            <ContextMethods.Provider value={{addToCarrito, deleteFromCart, carritoData}}>
                {children}
            </ContextMethods.Provider>
        </ContextData.Provider>
    )
}



export default CarritoProvider