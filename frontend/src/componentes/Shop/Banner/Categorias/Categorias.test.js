import {CategoriasJsx} from "./Categorias";
import {render} from "@testing-library/react";

const data = {
    "PC": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC1": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC2": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC3": ["GAMER", "NORMAL", "NUCLEAR"],
    "PC4": ["GAMER", "NORMAL", "NUCLEAR"],
}

it("Categorias render", () => {
    render(<CategoriasJsx data={data}/>)
})
