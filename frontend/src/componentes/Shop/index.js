import Catalogo from "./Catalogo/Catalogo";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import Steper from "./Steper/Steper";
import djangoAPIHandler from "../djangoAPIHandler";
import {Route, Redirect} from "react-router-dom";


const Shop = () => {
    const requestDataToDjango = () => djangoAPIHandler.productos.allProductos()
    return (
        <CarritoProvider>
            <Banner/>
            <Route path={"/Catalogo"}>
                <Redirect to={"/Catalogo/0"}/>
                <Catalogo requestDataDjango={requestDataToDjango}/>
            </Route>
            <Route path={"/Carrito"}>
                <Steper/>
            </Route>
            <Footer/>
        </CarritoProvider>
    )
}

export default Shop
