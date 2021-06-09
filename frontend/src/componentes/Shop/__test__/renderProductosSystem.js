import {render} from "@testing-library/react";
import CarritoProvider from "../Carrito";
import {listaDeProductos} from "./productoDummy";
import Producto from "../ProductoPage";
import {MemoryRouter} from "react-router-dom";

const renderProductoSystem = (lista = listaDeProductos)  => render(
    <MemoryRouter>
        <CarritoProvider>
            { lista.map(value => <Producto key={value.id} producto={value} id={value.id}/>)   }
        </CarritoProvider>
    </MemoryRouter>
)

export default renderProductoSystem