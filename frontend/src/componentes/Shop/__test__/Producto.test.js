import {cleanup, fireEvent, render} from "@testing-library/react";
import CarritoProvider from "../Carrito";
import Producto from "../ProductoPage";
import {productoDommy, listaDeProductos} from "./productoDummy";
import renderProductoSystem from "./renderProductosSystem";




describe("productos with carrito", () => {
    beforeEach(cleanup)
    it("build", () => {
        renderProductoSystem()
    })
    it("Click a un Producto", () => {
        const {getAllByTestId} = renderProductoSystem()
        const BotonList = getAllByTestId("Click me")
        expect(BotonList.length).toBe(10)
        BotonList.map(value => fireEvent.click(value))

    })
})
