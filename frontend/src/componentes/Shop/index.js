import Catalogo from "./Catalogo/Catalogo";
import PageProducto from "./ProductoPage";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import Steper from "./Steper/Steper";
import Carrousel from "./Carrousel";
import djangoAPIHandler from "../djangoAPIHandler";
import {Route} from "react-router-dom";
import CatalogoSearch from "./Catalogo/CatalogoSearch";


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
            <Route path="/Search/:search">
                <CatalogoSearch/>
            </Route>
            <Route path="/Carrito">
                <Steper/>
            </Route>
            <Route path="/Producto/:id">
                <PageProducto/>
            </Route>
            <Footer/>
        </CarritoProvider>
    )
}

export default Shop
