import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "./App";

it("app render", () => {
    const app = render(<App/>)
})
