import Catalogo from "./Catalogo/Catalogo";
import Banner from "./Banner/Banner"
import Footer from "./Footer"
import CarritoProvider from "./Carrito";
import {Route, Redirect} from "react-router-dom";
import Steper from "./Steper/Steper";

const Shop = () => (
    <CarritoProvider>
            <Banner/>
            <Route path={"/Catalogo"}>
                <Redirect to={"/Catalogo/0"}/>
                <Catalogo/>
            </Route>
            <Route path={"/Carrito"}>
                <Steper/>
            </Route>
            <Footer/>
    </CarritoProvider>
)

export default Shop
