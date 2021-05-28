import styled from "styled-components";

const StyleBoton = styled.button`
    
`

const PasoBoton = ({paso, setActiveStep}) => <StyleBoton onClick={() => setActiveStep(paso)}>
    {`PASO ${paso}`}
</StyleBoton>

export default PasoBoton