import {render, Screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import Catalogo from "./Catalogo";

it("Build", () => {
    const catalogo = render(<Catalogo/>)
    expect(catalogo.container)
})