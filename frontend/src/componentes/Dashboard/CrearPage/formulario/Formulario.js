import {useState} from "react";
import FormJSX from "./FormJSX";
import DjangoAPIHandler from "../../../djangoAPIHandler";

const Formulario = ({changeStateValidation}) => {

    const [stateForm, setStateForm] = useState({
        nombre:"",
        precio:"",
        categoria:"",
        descripcion:"",
        img: ""
    })


    const generalSetter = props =>
        setStateForm({
            ...stateForm,
            [props.target.name]: props.target.value
        })

    const createProductoBackEnd = () => DjangoAPIHandler.productos.createProducto(stateForm)
    const createCategoriaBackEnd = () => DjangoAPIHandler.categorias.create({nombre: stateForm.categoria.toLowerCase()})

    const submitToBackEndHandler = async () => {
        await createProductoBackEnd()
        changeStateValidation()
    }

    const setImage = e => setStateForm({...stateForm, img: e.target.files[0]})

    return <FormJSX
        logic={generalSetter}
        submit={submitToBackEndHandler}
        value={stateForm}
        setImage={setImage}
    />

}

export default Formulario