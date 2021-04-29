import styled from "styled-components";
import { FlexRow } from "../reusable-styled/flexConteiners";

import Sidebar from "./SideBar";
import Formulario from "./Fromulario";

import {Route} from "react-router-dom"


const dashboard = () =>
{
    return <FlexRow>
    <Sidebar/>
        <Route path="/dashboard/crear">
            <Formulario/>
        </Route>
</FlexRow>
}

export default dashboard