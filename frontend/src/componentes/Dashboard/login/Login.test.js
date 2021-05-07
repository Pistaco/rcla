import {BuildLogin, ManipulateForm} from "./LoginTestHelpers";
import {cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom"
import Login from "./LoginJsx";

let buildhelper = new BuildLogin()
let manipulateHelper;

const buildapp = () => {
    buildhelper.buildApp()
}

const buildform = () => {
    buildhelper.buildFormFields()
    const formdata = buildhelper.getFormFields()
    manipulateHelper = new ManipulateForm(formdata)
    manipulateHelper.rellenarLoginFields()
}

const pressTheBotton = () => {
    manipulateHelper.interactWithBoton()
}

describe("LoginThings", () => {
    beforeEach(cleanup)
    it("build", () => {
        buildapp()
    })
    it("buildAndLogin", () => {
        buildapp()
        buildform()
        pressTheBotton()
    })
    it("build2", () => {
        render(<Login/>)
    })
})

