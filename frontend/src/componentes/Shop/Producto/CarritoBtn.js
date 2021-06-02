import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {ContextMethods} from "../Carrito";
import styled from "styled-components";

const StyleButton = styled.button`
    width: 4vw;
    height: 4vw;
    background-color: red;
    color: white;
    border-radius: 100%;
    border: white 5px solid;
    box-shadow: #3d3d3d 1px 1px 5px;
`

const pixel = "60%"
const style = {
    width: pixel,
    height: pixel
}

const CarritoBtn = ({onClick}) => <StyleButton>
    <FontAwesomeIcon  style={style} onClick={onClick}  icon={faShoppingCart}/>
</StyleButton>


export default CarritoBtn

