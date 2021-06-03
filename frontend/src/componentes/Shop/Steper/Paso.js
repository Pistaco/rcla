import styled from "styled-components";
import CarritoBtn from "../Producto/CarritoBtn";

const PasoStyle = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 2fr;
`

const Letras = styled.div`
    font-size: 10rem;
`
const Escojer = styled.div`
    margin-top: -50px;
    font-size: 6rem;
    color: #006736;
`

const StyleButton = styled.div`
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
    button {
      width: 250px;
      height: 250px;
    }
`

const Paso = () => (
    <PasoStyle>
            <StyleButton>
                    <CarritoBtn/>
            </StyleButton>
            <Letras>PASO 1</Letras>
            <Escojer>Escojer</Escojer>
    </PasoStyle>
)

export default Paso