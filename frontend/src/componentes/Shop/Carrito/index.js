import {useState, createContext, useEffect} from "react";

export const Context = createContext()
const { Provider } = Context

const CarritoProvider = ({children}) => {
    const [carritoData, setCarritoData] = useState([])

    const deleteFromCart = id => setCarritoData(carritoData.filter(value => value.id !== id))

    const addToCarrito = value => {
        const producto = getOrCreate(value)
        console.log(producto)
        const productoForCarrito = subirCantidad(createProductoForCarrito(producto))
        console.log(productoForCarrito)
        setCarritoData([...carritoData, productoForCarrito])
    }

    const getOrCreate = producto => {
        const {id} = producto
        if (checkIfProductExistInCarrito(id)) {
            const resultado = filterForIdInCarrito(id)
            return resultado.pop()
        }
        return createProductoForCarrito(producto)
    }

    const createProductoForCarrito = producto => ({
        ...producto,
        cantidad: 0
    })
    const subirCantidad = producto => ({
        ...producto,
        cantidad: producto.cantidad + 1
    })

    const checkIfProductExistInCarrito = id => 1 === filterForIdInCarrito(id).length
    const filterForIdInCarrito = id => carritoData.filter(value => value.id === id)


    return (
        <Provider value={{addToCarrito, deleteFromCart}}>
            {children}
        </Provider>
    )
}



export default CarritoProvider