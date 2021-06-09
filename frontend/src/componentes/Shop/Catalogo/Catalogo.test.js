import {cleanup, fireEvent, render, act} from "@testing-library/react";
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import Catalogo from "./Catalogo";
import {MemoryRouter} from "react-router-dom";

describe("catalogo build and others", () => {
    beforeEach(cleanup)

    it("Build", () => {
        render(
            <MemoryRouter>
                <Catalogo/>
            </MemoryRouter>
        )
    })

    it("Click", () => {
        const {getByText} = render(
            <MemoryRouter>
                <Catalogo/>
            </MemoryRouter>
        )
        const inputBoton2 = getByText("Next")
        fireEvent.click(inputBoton2)
    })
})
