import {fireEvent} from "@testing-library/react";
import renderProductoSystem from "./renderProductosSystem";
import "@testing-library/jest-dom/extend-expect"

const aa = a => b => c => "d"
const dobleClick = producto => {
    fireEvent.click(producto)
    fireEvent.click(producto)
}

const click = producto => fireEvent.click(producto)


it("Agregar2Veces", () => {
    const {getAllByDisplayValue} = renderProductoSystem()
    const botonPrimerProducto = getAllByDisplayValue("Click me")[0]
    dobleClick(botonPrimerProducto)
})

it("Agregar 2 veces una, y 1 distinta", () => {
    const {getAllByDisplayValue} = renderProductoSystem()
    const [boton1, boton2] = getAllByDisplayValue("Click me")
    dobleClick(boton1)
    click(boton2)
})
