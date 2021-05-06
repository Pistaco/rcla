import {fireEvent,  render} from "@testing-library/react";
import Login from "./Login";

export class BuildLogin {
    buildApp() {
        this.app = render(<Login setToken={jest.fn()}/>)
    }
    buildFormFields() {
        const {getByText, getByTestId} = this.app

        const usuario = getByTestId("usuario")
        const password = getByTestId("password")
        const boton = getByText("Submit")

        this.formFields = {
            usuario,
            password,
            boton
        }
    }
    getFormFields() {
        return this.formFields
    }
}

export class ManipulateForm {
    constructor(form) {
        this.login = form
    }

    rellenarLoginFields() {
        rellenarFieldhelper(this.login.usuario, "test")
        rellenarFieldhelper(this.login.password, "12345678")
    }

    interactWithBoton() {
        const boton = this.login.boton
        fireEvent.click(boton)
    }
}

const rellenarFieldhelper = (field, value) => {
    fireEvent.change(field, {
        target: {
            value: [value]
        }
    })
}
