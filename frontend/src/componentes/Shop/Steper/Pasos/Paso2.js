import styled from "styled-components";
import {FlexCenter} from "../../../reusable-styled/flexConteiners";

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
const PasoDireccion = () => (
    <Style>
        <FormStyle className="form-group-lg">
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect1">Direccion</label>
                    <input className="form-control" id="exampleFormControlSelect1"/>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect2">Postal</label>
                    <input className="form-control" id="exampleFormControlSelect2"/>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect2">Nombre</label>
                    <input className="form-control" id="exampleFormControlSelect2"/>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect2">Telefono</label>
                    <input className="form-control" id="exampleFormControlSelect2"/>
                </div>
            </div>
            <Submit type="submit" className="btn btn-primary ">Submit</Submit>
        </FormStyle>
    </Style>

)

export default PasoDireccion