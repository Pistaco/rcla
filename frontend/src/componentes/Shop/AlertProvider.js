import {createContext, useContext, useState} from "react";
import Alert from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";
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

const AlertProvider = props => {
    const [alert, setAlert] = useState(false)
    const change = () => setAlert(true)
    const onClose = () => setAlert(false)

    return (
        <Context.Provider value={change}>
            { props.children }
            <Snackbar open={alert} autoHideDuration={1000} onClose={onClose}>
                <Alert>Agregado al carrito</Alert>
            </Snackbar>
        </Context.Provider>
    )
}

export default AlertProvider