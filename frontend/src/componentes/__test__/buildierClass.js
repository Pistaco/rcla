import {render} from "@testing-library/react";

export class buildierClass {
    constructor(component) {
        this.component = component
    }
    BuildPage() {
        this.page = render(this.component)
    }
    getPage() {
        return this.page
    }
}

