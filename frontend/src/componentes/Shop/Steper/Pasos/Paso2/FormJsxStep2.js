import styled from "styled-components";
import {FlexCenter} from "../../../../reusable-styled/flexConteiners";

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

const Button = styled.button`
    margin-top: 20px;
`

const FormJsxStep2 = ({direccionGsetter, compradorGsetter, clickBoton}) => (
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
                           name="correo"
                           onChange={compradorGsetter()}
                           id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect2">Nombre</label>
                    <input className="form-control" name="nombre" onChange={compradorGsetter()}  id="exampleFormControlSelect2"/>
                </div>
                <div className="form-group col">
                    <label htmlFor="exampleFormControlSelect2">Telefono</label>
                    <input className="form-control" name="telefono" onChange={compradorGsetter()} id="exampleFormControlSelect2"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="textarea1">Descripcion</label>
                    <textarea name="descripcion" className="form-control"  onChange={compradorGsetter()} placeholder="*opcional" rows="7" id="textarea1"/>
                </div>
            </div>
            <Button onClick={clickBoton} className="btn btn-success pe-4 ps-4">Save</Button>
        </FormStyle>
    </Style>
)

export default FormJsxStep2