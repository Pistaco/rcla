import Steper from "../Steper/Steper";
import "@testing-library/jest-dom/extend-expect"
import {cleanup, fireEvent, render} from "@testing-library/react";
import CarritoProvider from "../Carrito";

beforeEach(cleanup)
it("Render ok", () => {
    render(
        <CarritoProvider>
            <Steper/>
        </CarritoProvider>
    )
})

it("Render Botones", () => {
    const {getByText} = render(
        <CarritoProvider>
            <Steper/>
        </CarritoProvider>
    )
    getByText("PASO 1")
    getByText("PASO 2")
    getByText("PASO 3")
    getByText("PASO 4")
})

it("Comprobate if the boton work", () => {
    const {getByText} = render(
        <CarritoProvider>
            <Steper/>
        </CarritoProvider>
    )
    const botonPaso2 = getByText("PASO 2")
    fireEvent.click(botonPaso2)
    getByText(2)
})