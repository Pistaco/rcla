import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom";

const pixel = "4rem"

const StyleCarrito = {
    gridRow: " 2 / 3",
    justifySelf: "center",
    alignSelf: "center",

    width: pixel,
    height: pixel,
}

const CarritoIcon = () => <Link style={StyleCarrito} to={"/Carrito"}><FontAwesomeIcon style={StyleCarrito} icon={faShoppingCart}/></Link>

export default CarritoIcon