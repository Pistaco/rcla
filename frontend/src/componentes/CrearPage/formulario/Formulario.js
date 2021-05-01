import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

import FormJSX from "./FormJSX";


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


    const handFormProcess = () => {
        const response = sendTobackEnd()
        response.then(changeStateValidation)
    }

    const sendTobackEnd = () => {
        const url = "/api/producto-create"
        const cookie = Cookies.get("csrftoken")
        const confi = {
            headers: {'X-CSRFToken': cookie}
        }
        return axios.post(url, stateForm, confi)
    }

    return <FormJSX
        logic={generalSetter}
        submit={handFormProcess}
        value={stateForm}
    />

}

export default Formulario