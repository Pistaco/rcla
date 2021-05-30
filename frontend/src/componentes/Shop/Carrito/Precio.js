import styled from "styled-components";
import {shape} from "./shapeStyle";

const StylePrecio = styled(shape)`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: -2 / -1;
    
    font-size: 2rem;
`


const PrecioNumero = styled.div`
  font-size: 1em;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
`

const Total = styled.div`
    font-size: 1em;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
`


const Precio = ({precio}) => <StylePrecio>
    <PrecioNumero>
        {precio}
    </PrecioNumero>
    <Total>Total a Pagar</Total>
</StylePrecio>

export default Precio