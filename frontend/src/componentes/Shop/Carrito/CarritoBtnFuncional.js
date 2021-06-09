import {BtnAlertWithCarrito} from "../AlertProvider";
import {useContext} from "react";
import {ContextMethods} from "./index";

const CarritoBtnFuncional = ({data}) => {
    const {addToCarrito} = useContext(ContextMethods)
    const onClick = () => addToCarrito(data)
    return <BtnAlertWithCarrito onClick={onClick}/>
}

export default CarritoBtnFuncional

