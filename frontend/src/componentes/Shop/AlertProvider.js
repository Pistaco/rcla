import {createContext, useContext, useState} from "react";
import AlertUI from "@material-ui/lab/Alert";
import styled from "styled-components";
import {Fade} from "@material-ui/core";
import CarritoBtn from "./Producto/CarritoBtn";

export const Context = createContext()

export const BtnAlertWithCarrito = ({onClick}) => {
    const change = useContext(Context)
    return (
        <CarritoBtn onClick={() => {
            change()
            onClick()
        }}/>
    )
}

const Alert =  styled(AlertUI)`
    position: fixed;
    width: 70%;
    bottom: 10px;
    right: 0;
    left: 0;
    margin: auto;
`

const AlertProvider = props => {
    const [alert, setAlert] = useState(false)
    const change = () => {
        if (alert === false) {
            setAlert(true)
            setTimeout(() => setAlert(false), 1500)
        }
    }

    return (
        <Context.Provider value={change}>
            { props.children }
            <Fade in={alert}>
                <Alert>Agregado al carrito</Alert>
            </Fade>
        </Context.Provider>
    )
}

export default AlertProvider