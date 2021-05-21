import styled from "styled-components";


const LogoStyle = styled.div`
  
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  justify-self: center;

  width: 80%;
  background-color: #d9d9d9;
`

const Logo = () => <LogoStyle/>


export default Logo