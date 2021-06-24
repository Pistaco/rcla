import {useContext, useEffect, useState} from "react";
import djangoAPIHandler from "../../../../djangoAPIHandler";
import {Style, Codigo, WraperWhite} from "./style"
import {ContextData} from "../../../Carrito";

const tracer = value => {
    console.log(value)
    return value
}

const KEY_OBJECT_CARRITO = "carrito_productos"

const ConfirmadoCompra = () => {
    const [codigo, setCodigo] = useState("Cargando...")
    const carritoData = useContext(ContextData)

    const codigoProcess = () => {
        requestDjangoProcess(createData())
            .then(setCodigo)
            .catch(console.log)
    }

    const getLocalData = () => JSON.parse(localStorage.getItem("formData"))
    const createData = () => ({...getLocalData(), [KEY_OBJECT_CARRITO]: carritoData})


    const requestDjangoProcess = data => djangoAPIHandler.pedidoProcess.createPedido(data)

    useEffect(codigoProcess, [])

    return <WraperWhite>
        <Style>
            <h1>Ha realizado su compra!</h1>
            <h1>Su codigo es el siguiente: </h1>
            <Codigo><h1>{codigo}</h1></Codigo>
        </Style>
    </WraperWhite>

}

export default ConfirmadoCompra