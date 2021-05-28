import {useState, createContext} from "react";

export const Context = createContext()
const { Provider } = Context

const CarritoProvider = ({children}) => {
    const [carritoData, setCarritoData] = useState([])

    const listaManager =  {
        checkIfExist: id => carritoData.some(value => value.id === id),
        add: producto => setCarritoData([...carritoData, {...producto, cantidad: 0}]),
        delete: producto => setCarritoData(carritoData.filter(value => value.id !== producto.id))
    }

    const addToCarrito = producto => listaManager.checkIfExist(producto.id) ?
        sumProductoInList(producto):
        listaManager.add(producto)

    const deleteFromCart = producto => checkIfCantidadEqual1(producto.id) ?
        listaManager.delete(producto)
        : reduceList(producto)

    const sumProductoInList = producto => setCarritoData(findAproductInListAndDo(sumCantidadProperty(1))(producto))

    const findAproductInListAndDo = funcion => producto => carritoData.map(value =>
        value.id === producto.id ?
            funcion(value) :
            value
    )


    const reduceList = producto => setCarritoData((findAproductInListAndDo(sumCantidadProperty(-1))(producto) ))
    const checkIfCantidadEqual1 = id => carritoData.some(value => value.id === id ? value.cantidad === 1: false)


    const sumCantidadProperty = numero => producto => ({
        ...producto,
        cantidad: producto.cantidad + numero
    })
    return (
        <Provider value={{addToCarrito, deleteFromCart, carritoData}}>
            {children}
        </Provider>
    )
}



export default CarritoProvider