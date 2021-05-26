import {useState, createContext} from "react";
import {tracerTable} from "../../../utils";

export const Context = createContext()
const { Provider } = Context

const CarritoProvider = ({children}) => {
    const [carritoData, setCarritoData] = useState([])

    const listaManager =  {
        checkIfExist: id => carritoData.some(value => value.id === id),
        add: producto => setCarritoData([...carritoData, producto]),
        delete: producto => setCarritoData(carritoData.filter(value => value.id !== producto.id))
    }


    const addToCarrito = producto => {
        createOrSum(producto)
        tracerTable("Lista")(carritoData)
    }
    const deleteFromCart = id => {
        deleteOrReduce(id)
    }

    const createOrSum = producto => generalExistOrDo(sumProducto)(listaManager.add)(producto)
    const deleteOrReduce = () => generalExistOrDo(reduceProducto)(listaManager.delete)

    const sumProducto = producto => {
        const lista = mapToTheListId(sumOrReduce(1))
        const resultado = lista(producto)
        tracerTable("A")({
            cantidad: 3
        })
        return resultado
    }
    const reduceProducto = () => mapToTheListId(sumOrReduce(-1))

    const mapToTheListId = funcion => producto => carritoData.map(value =>
        value.id === producto.id ?
            funcion(value) :
            value
    )

    const sumOrReduce = numero => value => ({
        ...value,
        cantidad: value.cantidad + numero
    })

    const generalExistOrDo = trueAlternative => falseAlternative => parametro => {
        const {id} = parametro
        if (listaManager.checkIfExist(id)) {
            trueAlternative(parametro)
        } else {
            falseAlternative(parametro)
        }
    }

    return (
        <Provider value={{addToCarrito, deleteFromCart}}>
            {children}
        </Provider>
    )
}



export default CarritoProvider