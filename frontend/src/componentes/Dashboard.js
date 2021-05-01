import styled from "styled-components";
import { FlexRow } from "../reusable-styled/flexConteiners";

import Sidebar from "./SideBar";

import CrearPage from "./CrearPage/CrearPage";
import ProductosPage from "./ProductosPage/ProductosPage"

import {Route} from "react-router-dom"

const StyleContent = styled.div`
    width: 100%;
`

const dashboard = () =>
{
    return <FlexRow>
    <Sidebar/>
        <StyleContent>
            <Route path="/dashboard/crear">
                <CrearPage/>
            </Route>

            <Route path="/dashboard/productos">
                <ProductosPage/>
            </Route>
        </StyleContent>
</FlexRow>
}

export default dashboard