import PasoBoton from "./PasoBoton";
import styled from "styled-components";
import {FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";

const StyleBotones = styled(FlexRowSpacedEvenly)`
    width: 50%;
    grid-row: 1/ 2;
    grid-column:  2 / 3;
    align-self: start;
    justify-self: center;
  
    @media (max-width: 800px) {
      grid-row: 2 / 3;
      grid-column: auto / auto;
      margin: 10px 0;
    }
`
const SetDeBotones = ({setActiveStep, paso}) => {
    const numeroPasos = [1, 2, 3, 4]
    const ifPasesRed = pasoActual => paso >= pasoActual
    return <StyleBotones>
        {numeroPasos.map(value => <PasoBoton ifPasePasedRed={ifPasesRed} key={value} paso={value} setActiveStep={setActiveStep}/>)}
    </StyleBotones>
}

export default SetDeBotones

