import styled from "styled-components";
import {FlexCenter} from "../../../reusable-styled/flexConteiners";
import {useState} from "react";

const Style = styled(FlexCenter)`
`

const FormStyle = styled.form`
    background-color: white;
    border-radius: 50px;
    padding: 50px;
    box-shadow: 1px 10px 10px #00000029;
    .form-group {
      margin: 30px 0;
    }
`

const Submit = styled.button`
    margin-top: 20px;
`
const PasoDireccion = () => {
    const [direccion, direccionSet] = useState({

    })

    const [comprador, compradorSet] = useState({

    })

    const generalSetter = funcion => props => funcion(value => ({
        ...value,
        [props.target.name] : props.target.value
    }))

    const compradorGsetter = () => generalSetter(compradorSet)
    const direccionGsetter = () => generalSetter(direccionSet)

    return (
        <Style>
            <FormStyle className="form-group-lg">
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlSelect1">Calle</label>
                        <input name="calle" onChange={direccionGsetter()} className="form-control" id="exampleFormControlSelect1"/>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="exampleFormControlSelect2">Numero</label>
                        <input name="calle_numero" onChange={direccionGsetter()} className="form-control" id="exampleFormControlSelect2"/>
                    </div>
                </div>
                <div className="row">

                    <div className="form-group col">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control"
                               onChange={compradorGsetter()}
                               id="exampleFormControlInput1"
                               placeholder="name@example.com"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlSelect2">Nombre</label>
                        <input className="form-control" onChange={compradorGsetter()}  id="exampleFormControlSelect2"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlSelect2">Telefono</label>
                        <input className="form-control" onChange={compradorGsetter()} id="exampleFormControlSelect2"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="textarea1">Descripcion</label>
                        <textarea className="form-control"  onChange={compradorGsetter()} placeholder="*opcional" rows="7" id="textarea1"/>
                    </div>
                </div>
                <Submit type="submit" className="btn btn-primary ">Submit</Submit>
            </FormStyle>
        </Style>

    )
}

export default PasoDireccion