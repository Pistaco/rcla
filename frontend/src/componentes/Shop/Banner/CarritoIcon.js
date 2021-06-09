import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ContextData} from "../Carrito";

import {Badge} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const StyleBadge = withStyles(() => ({
    badge: {
        fontSize: "15px",
        padding: "10px 10px"
    }
}))(Badge)


const pixel = "4rem"

const StyleCarrito = {
    gridRow: " 2 / 3",
    justifySelf: "center",
    alignSelf: "center",
    width: pixel,
    height: pixel,
}


const CarritoIcon = () => {
    const [numeroItems, setNumero] = useState(0)
    const dataCarrito = useContext(ContextData)
    const calculateItems = () => dataCarrito.reduce((actual, item) => item.cantidad + actual, 0)
    useEffect(() => setNumero(calculateItems()), [dataCarrito])
    return (
        <StyleBadge style={StyleCarrito} color="secondary" badgeContent={numeroItems}>
            <Link style={StyleCarrito} to="/Carrito">
                <FontAwesomeIcon style={StyleCarrito} icon={faShoppingCart}/>
            </Link>
        </StyleBadge>
    )
}

export default CarritoIcon