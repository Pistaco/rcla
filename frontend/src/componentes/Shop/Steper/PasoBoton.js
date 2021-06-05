import styled from "styled-components";

const StyleBoton = styled.button`
  background-color: ${props => props.red ? "#FF0000" : "white"};
  color: ${props => props.red ? "white" : "black"};
  border: 0;
  width: 100%;
  height: 50px;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`

const Letras = styled.div`
    margin-left: 10px;
`

const PasoBoton = ({paso, setActiveStep, ifPasePasedRed}) => <StyleBoton red={ ifPasePasedRed(paso) } onClick={() => setActiveStep(paso)}>
   <Letras>
      {`PASO ${paso}`}
   </Letras>
</StyleBoton>

export default PasoBoton