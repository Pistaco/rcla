import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {green} from "../../reusable-styled/colors";


const pixel = "50px"

const StyleCarrito = {
    gridRow: " 2 / 3",
    justifySelf: "center",
    alignSelf: "center",

    width: pixel,
    height: pixel,
}

const CarritoIcon = () =>
        <FontAwesomeIcon style={StyleCarrito} icon={faShoppingCart}/>

export default CarritoIcon