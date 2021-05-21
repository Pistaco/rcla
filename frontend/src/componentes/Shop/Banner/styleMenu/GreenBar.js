import styled from "styled-components";
import {green} from "../../../reusable-styled/colors";

const StyleGreenBar = styled.div`
  
    grid-row: -2 / -1;
    grid-column: 1 / -1;
  
    background-color: ${green};
`

const GreenBar = () => <StyleGreenBar/>

export default GreenBar