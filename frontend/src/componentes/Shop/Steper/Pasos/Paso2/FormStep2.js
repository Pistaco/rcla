import {useState} from "react";
import FormJsxStep2 from "./FormJsxStep2";

const FormStep2 = ({openAlert}) => {
    const [direccion, direccionSet] = useState({
        nombre: "1"
    })
    const [comprador, compradorSet] = useState({})

    const generalSetter = funcion => props => funcion(value => ({
        ...value,
        [props.target.name] : props.target.value
    }))

    const compradorGsetter = () => generalSetter(compradorSet)
    const direccionGsetter = () => generalSetter(direccionSet)

    const clickBoton = event => {
        event.preventDefault()
        safeLocalStorage()
        openAlert()
    }

    const safeLocalStorage = () => {
        const objeto = {direccion, comprador}
        const objeto_serializado = JSON.stringify(objeto)
        localStorage.setItem("formData", objeto_serializado)
    }

    return <FormJsxStep2
        clickBoton={clickBoton}
        compradorGsetter={compradorGsetter}
        direccionGsetter={direccionGsetter}
    />
}

export default FormStep2