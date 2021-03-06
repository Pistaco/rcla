import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackspace} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Style = styled.button`
    color: red;
    background-color: transparent;
    border: transparent;
`
const DeleteBoton = ({onClick}) => <Style onClick={onClick}>
    <FontAwesomeIcon   icon={faBackspace}/>
</Style>
export default DeleteBoton