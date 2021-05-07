import styled from "styled-components";
import {FlexCenter} from "../../reusable-styled/flexConteiners";

const Style = styled(FlexCenter)`
    width: 300px;
    height: 100px;
    margin-top: 50px;
    background-color: orange;
    text-align: center;
`
const ErrorMensaje = () => <Style>No es posible ingresar con las credenciales insertadas</Style>

export default ErrorMensaje
