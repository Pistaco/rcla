import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import Catalogo from "./Catalogo";
import Producto from "../Producto";
import CarritoProvider, { Context} from "../Carrito";



describe("catalogo build and others", () => {
    beforeEach(cleanup)

    it("Build", () => {
         render(<Catalogo/>)
    })

    it("Click", () => {
        const {getByText} = render(<Catalogo/>)
        const inputBoton2 = getByText("Next")
        fireEvent.click(inputBoton2)
    })
})
