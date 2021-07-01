import Row from "./Row";
import {
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
} from "@material-ui/core";

import {useState} from "react";

const ATable = ({lista, refreshTable}) => {
    const [page, setPage] = useState()

    return (
                    <Table >
                        <TableHead >
                            <TableRow >
                                <TableCell><p>Nombre</p></TableCell>
                                <TableCell><p>Numero</p></TableCell>
                                <TableCell><p>Correo</p></TableCell>
                                <TableCell><p>Calle</p></TableCell>
                                <TableCell><p>Fecha compra</p> </TableCell>
                                <TableCell><p>Entregado</p></TableCell>
                                <TableCell><p>Codigo</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lista.map((value, index) => <Row value={value} key={index}/> )}
                        </TableBody>
                        </Table>
    )
}

export default ATable