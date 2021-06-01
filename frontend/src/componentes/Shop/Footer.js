import styled from "styled-components";
import {green} from "../reusable-styled/colors";
import {FlexRowCenter, FlexRow} from "../reusable-styled/flexConteiners";

const FooterStyle = styled(FlexRowCenter)`
  height: 15vw;
  background-color: ${green};
  
  @media (max-width: 800px) {
    height: 40vw;
  }
`
const Links = styled(FlexRow)`
  width: 50%;
  height: 50%;
`

const Link = styled(FlexRowCenter)`
  width: 100%;
  color: white;
  border-right: 1px white solid;
`

const Footer = () => <FooterStyle>
    <Links>
        <Link> Diseñado por: </Link>
        <Link> Instagram  </Link>
        <Link style={{borderRight: 0}}> Copyright </Link>
    </Links>
</FooterStyle>

export default Footer