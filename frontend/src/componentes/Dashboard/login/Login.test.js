import {BuildLogin, ManipulateForm} from "./LoginTestHelpers";
import {cleanup} from "@testing-library/react";

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
})

