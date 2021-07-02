import {Route} from "react-router-dom"
import {useState} from "react";

import { FlexRow } from "../reusable-styled/flexConteiners";

import Sidebar from "./SideBar";
import CrearPage from "./CrearPage/CrearPage";
import ProductosPage from "./ProductosPage/ProductosPage"
import Login from "./login/Login";
import Logout from "./Logout"
import PedidosPage from "./PedidosPage";

const Dashboard = () => {
    const [token, setToken] = useState("")

    if(!token) {
         return <Login setToken={setToken}/>
    }

    return (
        <FlexRow>
            <Sidebar/>
            <div style={{width: "100%"}}>
                <Route path="/dashboard/crear">
                    <CrearPage/>
                </Route>

                <Route path="/dashboard/productos">
                    <ProductosPage/>
                </Route>
                <Route path="/dashboard/pedidos">
                    <PedidosPage/>
                </Route>
                <Logout setToken={setToken}/>
            </div>
        </FlexRow>
    )
}

export default Dashboard