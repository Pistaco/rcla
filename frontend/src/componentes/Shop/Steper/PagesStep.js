import CarritoStep from "../Carrito/CarritoStep";
import PasoDireccion from "./Pasos/Paso2/index";
import ConfirmadoCompra from "./Pasos/Paso4";
import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-row: 3 / 4;
    grid-column: 1/ 3;
`

const PagesStep = ({step}) => {
    switch (step){
        case 1:
            return <CarritoStep/>
        case 2:
            return <PasoDireccion/>
        case 3:
            return "3"
        case 4:
            return <ConfirmadoCompra/>
    }
}

export default ({step}) => (
    <Style>
        <PagesStep step={step}/>
    </Style>
)