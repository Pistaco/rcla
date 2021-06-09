import {render} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import "@testing-library/jest-dom/extend-expect"

import App from "./App";

it("app render", () => {
    const app = render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    )
})
