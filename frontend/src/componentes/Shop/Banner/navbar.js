import styled from "styled-components";
import {FlexCenter, FlexRow} from "../../reusable-styled/flexConteiners";
import {green} from "../../reusable-styled/colors";


const StyleLinks = styled(FlexRow)`
  grid-row: 1 / span 1;
  grid-column:  2 / 3;
`

const Item  = styled(FlexCenter)`
  width: 100%;
  color: ${green};
  border-left:  ${green} solid ${props => props.first ?  0 : 1}px;
`


const Links = () => (
    <StyleLinks>
            <Item first>Quienes Somos?</Item>
            <Item>Ubicacion</Item>
            <Item>Relleno</Item>
            <Item >Relleno</Item>
    </StyleLinks>
)

export default Links