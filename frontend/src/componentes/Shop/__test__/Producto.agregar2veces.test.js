import {fireEvent} from "@testing-library/react";
import renderProductoSystem from "./renderProductosSystem";

it("Agregar2Veces", () => {
    const {getAllByDisplayValue} = renderProductoSystem()
    const botonPrimerProducto = getAllByDisplayValue("Click me")[0]
    const dobleClick = producto => {
        fireEvent.click(producto)
        fireEvent.click(producto)
    }
    dobleClick(botonPrimerProducto)
})
