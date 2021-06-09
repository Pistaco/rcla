import Steper from "../Steper/Steper";
import "@testing-library/jest-dom/extend-expect"
import {cleanup, fireEvent, render as renderT} from "@testing-library/react";
import CarritoProvider from "../Carrito";
import SetDeBotones from "../Steper/SetDeBotones";

const render = value => (
    renderT(
        <CarritoProvider>
            {value}
        </CarritoProvider>
    )
)

beforeEach(cleanup)
it("Render ok", () => {
    render( <Steper/> )

})

it("Render Botones", () => {
    const {getByText} = render(
        <SetDeBotones/>
    )
    getByText("PASO 1")
    getByText("PASO 2")
    getByText("PASO 3")
    getByText("PASO 4")
})

it("Comprobate if the boton work", () => {
    const {getByText} = render(
            <Steper/>
    )

    const botonPaso2 = getByText("PASO 2")
    fireEvent.click(botonPaso2)
})