import Catalogo from "./Catalogo/Catalogo";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import {Route, Redirect} from "react-router-dom";

const Shop = () => (
    <CarritoProvider>
            <Banner/>
            <Route path={"/Catalogo"}>
                <Redirect to={"/Catalogo/0"}/>
                <Catalogo/>
            </Route>
            <Footer/>
    </CarritoProvider>
)

export default Shop
