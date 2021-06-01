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
        const {getAllByDisplayValue} = renderProductoSystem()
        const BotonList = getAllByDisplayValue("Click me")
        expect(BotonList.length).toBe(10)
        BotonList.map(value => fireEvent.click(value))

    })

    it("Agregar y eliminar todos", () => {
        const {getAllByDisplayValue} = renderProductoSystem()
        const AddList = getAllByDisplayValue("Click me")
        const DeleteList = getAllByDisplayValue("Delete")
        AddList.forEach(value => fireEvent.click(value))
        DeleteList.forEach(value => fireEvent.click(value))
    })

})
