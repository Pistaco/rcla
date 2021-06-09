import Catalogo from "./Catalogo/Catalogo";
import PageProducto from "./ProductoPage";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import AlertProvider from "./AlertProvider";
import Steper from "./Steper/Steper";
import Carrousel from "./Carrousel";
import CatalogoSearch from "./Catalogo/CatalogoSearch";

import {Route} from "react-router-dom";

const Shop = () => {
    return (
        <AlertProvider>

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

        </AlertProvider>
    )
}

export default Shop
