import styled from "styled-components";
import djangoAPIHandler from "../djangoAPIHandler";

const StyledBoton = styled.input`
  position: fixed;
  width: 100px;
  bottom: 0;
  left: 0;
  margin: 15px;
`

const Logout = ({setToken}) => {
    const logoutClick = () => {
        djangoAPIHandler.auth.logout()
        setToken(false)
    }
    return <StyledBoton type="button" onClick={logoutClick} value={"Logout"}/>
}



export default Logout