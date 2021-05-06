import "@testing-library/jest-dom/extend-expect"
import {prettyDOM, render, getQueriesForElement, fireEvent, cleanup} from "@testing-library/react"
import {BuilderPage} from "./CrearPageHelpersandClasses";



const Builder = new BuilderPage()

const BuildAll = () => {
    Builder.BuildPage()
    Builder.BuildForm()
    Builder.BuildFormDateFields()
}

const Submit = () => {
    ClickBoton()
}

const ClickBoton = () => {
    const {boton} = Builder.getFormState()
    fireEvent.click(boton)
}

const ViewCreatePageDom = () => {
    const page = Builder.getPage()
    page.debug()
}


describe("CrearSeccion" ,()=> {
    beforeAll(cleanup)
    it("BuildEntireApp", () => {
        BuildAll()
    })

    it("Revisar-Dom", () => {
        BuildAll()
        Submit()
    })
})


