import Catalogo from "./Catalogo/Catalogo";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import Steper from "./Steper/Steper";
import Carrousel from "./Carrousel";
import djangoAPIHandler from "../djangoAPIHandler";
import {Route, Redirect} from "react-router-dom";


const Shop = () => {
    const requestDataToDjango = () => djangoAPIHandler.productos.allProductos()
    return (
        <CarritoProvider>
            <Banner/>
            <Route exact path="/">
                <Carrousel/>
            </Route>
            <Route path="/Catalogo/:categoria">
                <Catalogo/>
            </Route>
            <Route path="/Carrito">
                <Steper/>
            </Route>
            <Footer/>
        </CarritoProvider>
    )
}

export default Shop
