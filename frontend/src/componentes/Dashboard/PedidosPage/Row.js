import styled from "styled-components";
import Input from "./Input";
import {useContext, useEffect, useState} from "react";
import {TableRow, TableCell, Collapse, Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import MiniTable from "./MiniTable";

const StyleRow = styled(TableRow)`
    background-color: ${props => props.entregado ? "#09BC8A" : "default"};
`

const LinkStyle = styled(Link)`

`

const Row = ({value}) => {
    const [green, setGreen] = useState(value.entregado)
    const [open, setOpen] = useState(false)
    const changeColor = () => setGreen(!green)
    return (
        <>
            <StyleRow entregado={green} onClick={() => setOpen(!open)}>
                <TableCell><p>{value.comprador.nombre}</p></TableCell>
                <TableCell><p>{value.comprador.telefono}</p></TableCell>
                <TableCell><p>{value.comprador.correo}</p></TableCell>
                <TableCell><p>{value.direccion.calle} {value.direccion.calle_numero}</p></TableCell>
                <TableCell><p>{value.fecha}</p></TableCell>
                <TableCell><Input  changeColor={changeColor} initial={value.entregado} id={value.id}/></TableCell>
                <TableCell>{value.codigo}</TableCell>
            </StyleRow>
            <TableRow>
                {value.pedido_productos.length > 0 ?
                    <TableCell style={{margin: 0, padding: 0, border: 0}} colSpan={7}>
                        <Collapse  in={open}>
                            <MiniTable value={value.pedido_productos}/>
                        </Collapse>
                    </TableCell>
                    : null}
            </TableRow>
        </>
    )
}

export default Row
