import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const Style = styled.button`
    grid-row: 1/2;
    grid-column: 2/3;
    align-self: end;
    justify-self: center;
  
    border: 0;
    border-radius: 50px;
    padding: 15px 50px;
    color: white;
    font-size: 3rem;
    background-color: #F5C646;
    
    @media (max-width: 800px) {
      grid-row: -2 / -1;
      grid-column: auto / auto;
      padding: 10px 20px;
      margin-top: 20px;
    }
`

const StyleIcon = {
    marginRight: "20px",
}

const Icon = () => <FontAwesomeIcon style={StyleIcon} icon={faPlay}/>

const BotonContinuar = ({onClick}) => (
    <Style onClick={onClick}>
        <Icon/>
        Continuar
    </Style>
)

export default BotonContinuar