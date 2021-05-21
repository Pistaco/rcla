import {cleanup, fireEvent, render, Screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import Catalogo from "./Catalogo";

describe("Test del catalogo", () => {
    beforeEach(cleanup)

    it("Build", () => {
         render(<Catalogo/>)
    })

    it("Click", () => {
        const {getByText} = render(<Catalogo/>)
        const inputBoton2 = getByText(2)
        fireEvent.click(inputBoton2)
    })

})