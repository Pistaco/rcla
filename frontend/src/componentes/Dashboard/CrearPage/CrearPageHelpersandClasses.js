import {getQueriesForElement, render} from "@testing-library/react";
import CrearPage from "./CrearPage";
export class BuilderPage {
    BuildPage() {
        this.page = render(<CrearPage/>)
    }
    BuildForm() {
        this.form = this.page.container.querySelector(".form-style-8")
    }
    BuildFormDateFields() {
        const {getByDisplayValue, getByPlaceholderText} = getQueriesForElement(this.form)
        this.formState = {
            "nombre": getByPlaceholderText("Nombre"),
            "precio": getByPlaceholderText("Precio"),
            "descripcion": getByPlaceholderText("Descripcion"),
            "boton": getByDisplayValue("Submit")
        }
    }

    getForm() {
        return this.form
    }

    getFormState() {
        return this.formState
    }

    getPage() {
        return this.page
    }
}

