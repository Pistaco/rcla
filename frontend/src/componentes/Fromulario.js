import {useEffect, useReducer, useState} from "react";
import styled from "styled-components";

import axios from "axios";

import {FlexCenter} from "../reusable-styled/flexConteiners";
import FormJSX from "./FormJSX";

const StyledFormulario = styled(FlexCenter)`
    width: 80%;
`

const Formulario = () => {

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



    return (
        <StyledFormulario >
            <FormJSX
                logic={generalSetter}
                value={stateForm}
            />
        </StyledFormulario>
    )
}

export default Formulario