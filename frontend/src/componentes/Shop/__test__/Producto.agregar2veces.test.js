import {fireEvent, act} from "@testing-library/react";
import renderProductoSystem from "./renderProductosSystem";
import "@testing-library/jest-dom/extend-expect"

const dobleClick = producto => {
    fireEvent.click(producto)
    fireEvent.click(producto)
}

const click = producto => fireEvent.click(producto)


it("Agregar2Veces", () => {
    act(() => {
        const {getAllByTestId} = renderProductoSystem()
        const botonPrimerProducto = getAllByTestId("Click me")[0]
        dobleClick(botonPrimerProducto)
    })
})

it("Agregar 2 veces una, y 1 distinta", () => {
    act(() => {
        const {getAllByTestId} = renderProductoSystem()
        const [boton1, boton2] = getAllByTestId("Click me")
        dobleClick(boton1)
        click(boton2)
    })
})
