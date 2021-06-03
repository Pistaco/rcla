import styled from "styled-components";
import Precio from "./Precio";
import CarritoTable from "./CarritoTable";
import {useContext} from "react";
import {ContextData, ContextMethods} from "./index";


const StyleCarrito = styled.div`
    display: grid;
    grid-template-rows: 1fr .05fr .15fr;
    grid-template-columns: 1fr;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`

const CarritoStep = () => {
    const data = useContext(ContextData)
    const calcularTotal = () => data.reduce((dinero, value) => + dinero + (value.precio * value.cantidad) , 0)
    return (
        <StyleCarrito>
            <Precio precio={calcularTotal()}/>
            <CarritoTable data={data}/>
        </StyleCarrito>
    )
}

export default CarritoStep