import PasoBoton from "./PasoBoton";
import styled from "styled-components";

const StyleBotones = styled.div`
    grid-column:  2 / 3;
    justify-self: center;
`
const SetDeBotones = ({setActiveStep}) => {
    const numeroPasos = [1, 2, 3, 4]
    return <StyleBotones>
        {numeroPasos.map(value => <PasoBoton key={value} paso={value} setActiveStep={setActiveStep}/>)}
    </StyleBotones>
}

export default SetDeBotones

