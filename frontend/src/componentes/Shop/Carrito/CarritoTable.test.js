import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react";
import CarritoTable from "./CarritoTable";

import {listaDeProductos} from "../__test__/productoDummy";
import CarritoProvider from "./index";




it("Verificar si renderiza bien", () => {
    render(
        <CarritoProvider>
            <CarritoTable data={listaDeProductos}/>
        </CarritoProvider>
    )
})

it("Productos en carrito", () => {
    const {getAllByAltText} = render(
        <CarritoProvider>
            <CarritoTable data={listaDeProductos}/>
        </CarritoProvider>
    )
})