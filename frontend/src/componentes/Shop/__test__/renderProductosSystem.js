import {render} from "@testing-library/react";
import CarritoProvider from "../Carrito";
import {listaDeProductos} from "./productoDummy";
import Producto from "../ProductoPage";

const renderProductoSystem = (lista = listaDeProductos)  => render(
    <CarritoProvider>
        { lista.map(value => <Producto producto={value} id={value.id}/>)   }
    </CarritoProvider>
)

export default renderProductoSystem