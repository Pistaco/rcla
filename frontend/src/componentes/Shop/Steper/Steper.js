import {useState} from "react";
import styled from "styled-components";

import PagesStep from "./PagesStep";
import SetDeBotones from "./SetDeBotones";
import {FlexCenter} from "../../reusable-styled/flexConteiners";

const StyleSteper = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr ;
    grid-template-columns: 1fr 1fr;
  
    width: 90%;
    height: 90%;
    padding: 30px;
    border-radius: 50px;
    background-color: #D8D8D8;
`
const Steper = () => {
    const [activeStep, setActiveStep] = useState(1)
    const styleForFlex = {height: "100vh"}
    return <FlexCenter style={styleForFlex}>
        <StyleSteper>
            <SetDeBotones setActiveStep={setActiveStep}/>
            <PagesStep step={activeStep}/>
        </StyleSteper>
    </FlexCenter>
}


export default Steper