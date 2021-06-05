import styled from "styled-components";
import CarritoBtn from "../Producto/CarritoBtn";

const PasoStyle = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr auto;
    @media (max-width: 800px) {
      grid-template-columns:  1fr;
    }
    
`

const Letras = styled.div`
    font-size: 10rem;
    @media (max-width: 800px) {
      font-size: 7rem;
    }
`
const Escojer = styled.div`
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

const pasosNombres = {
    "1": "Verificar",
    "2": "Direccion",
    "3": "Pagar",
    "4": "Enviar",
}
const Paso = ({paso}) => (
    <PasoStyle>
            <StyleButton>
                    <CarritoBtn/>
            </StyleButton>
            <Letras>PASO {paso}</Letras>
            <Escojer>{ pasosNombres[paso] }</Escojer>
    </PasoStyle>
)

export default Paso