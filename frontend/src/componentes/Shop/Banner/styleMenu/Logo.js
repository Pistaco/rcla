import styled from "styled-components";
import logo from "../../../../static/unnamed.jpg"

const LogoStyle = styled.img`
  
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  justify-self: center;
  
  width: 80%;
`

const Logo = () => <LogoStyle src={logo} alt="Logo de la tienda"/>


export default Logo