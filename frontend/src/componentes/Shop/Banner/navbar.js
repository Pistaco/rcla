import styled from "styled-components";
import {FlexCenter, FlexRow} from "../../reusable-styled/flexConteiners";
import {green} from "../../reusable-styled/colors";

const LinksS = styled(FlexRow)`
    grid-row: 1 / span 1;
    grid-column:  2 / 3; 
`

const Item  = styled(FlexCenter)`
    width: 100%;
    color: ${green};
    border-left: solid ${green} 1px;
`

const Links = () => <LinksS>
    <Item>Quienes Somos?</Item>
    <Item>Ubicacion</Item>
    <Item>Relleno</Item>
    <Item style={{borderRight: `solid ${green} 1px`}}>Relleno</Item>
</LinksS>

export default Links