import styled from "styled-components";
import logo from "../../../../static/unnamed.jpg"
import {Link} from "react-router-dom";

const LogoStyle = styled.div`
  
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  justify-self: center;
  width: 80%;
  
`

const style = {
    width: "100%",
}

const Logo = () => (
    <LogoStyle>
        <Link to={"/"}>
            <img style={style} src={logo}/>
        </Link>
    </LogoStyle>
)


export default Logo