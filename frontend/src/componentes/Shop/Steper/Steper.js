import {useState} from "react";
import styled from "styled-components";

import PagesStep from "./PagesStep";
import SetDeBotones from "./SetDeBotones";
import {FlexCenter} from "../../reusable-styled/flexConteiners";
import Paso from "./Paso";

const StyleSteper = styled.div`
    display: grid;
    grid-template-rows: 1fr .1fr 2fr ;
    grid-template-columns: 1fr 1fr;
  
    width: 90%;
    min-height: 100vh;
    padding: 30px;
    margin: 30px 0;
    border-radius: 50px;
    background-color: #D8D8D8;
  
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr;
      min-height: 150vh;
    }
  
`
const Steper = () => {
    const [activeStep, setActiveStep] = useState(1)
    return <FlexCenter>
        <StyleSteper>
            <Paso paso={activeStep}/>
            <SetDeBotones setActiveStep={setActiveStep}/>
            <PagesStep step={activeStep}/>
        </StyleSteper>
    </FlexCenter>
}


export default Steper