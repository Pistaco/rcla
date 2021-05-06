import {useState} from "react";
import FormJSX from "./FormJSX";
import DjangoAPIHandler from "../../../djangoAPIHandler";

const Formulario = ({changeStateValidation}) => {

    const [stateForm, setStateForm] = useState({
        nombre:"",
        precio:"",
        descripcion:"",
    })


    const generalSetter = props =>
        setStateForm({
            ...stateForm,
            [props.target.name]: props.target.value
        })

    const createProductoBackEnd = () => DjangoAPIHandler.productos.createProducto(stateForm)

    const submitToBackEndHandler = async () => {
        await createProductoBackEnd()
        changeStateValidation()
    }

    return <FormJSX
        logic={generalSetter}
        submit={submitToBackEndHandler}
        value={stateForm}
    />

}

export default Formulario