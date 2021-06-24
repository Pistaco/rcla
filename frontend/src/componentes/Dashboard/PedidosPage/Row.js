import styled from "styled-components";
import Input from "./Input";
import {useState} from "react";

const StyleRow = styled.tr`
    background-color: ${props => props.entregado ? "#09BC8A" : "default"};
`

const Row = ({value}) => {
    const [green, setGreen] = useState(value.entregado)
    const changeColor = () => setGreen(!green)
    return (
        <StyleRow entregado={green}>
            <td>{value.comprador.nombre}</td>
            <td>{value.comprador.telefono}</td>
            <td>{value.comprador.correo}</td>
            <td>{value.direccion.calle} <span>{value.direccion.calle_numero}</span></td>
            <td>{value.fecha}</td>
            <td><Input  changeColor={changeColor} initial={value.entregado} id={value.id}/></td>
            <td>{value.codigo}</td>
        </StyleRow>
    )
}

export default Row
