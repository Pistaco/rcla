import {render} from "@testing-library/react";
import CarritoProvider from "../Carrito";
import {listaDeProductos} from "./productoDummy";
import Producto from "../Producto";

const renderProductoSystem = () => render(
    <CarritoProvider>
        { listaDeProductos.map(value => <Producto producto={value} id={value.id}/>)   }
    </CarritoProvider>
)

export default renderProductoSystem
