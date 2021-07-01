import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {useEffect} from "react";

const MiniTable = ({value}) => {
    useEffect(() => console.log(value),[])
    return <Box margin={5}>
        <h2>Productos</h2>
        <Table >
            <TableHead>
                <TableCell><p>nombre</p></TableCell>
                <TableCell><p>cantidad</p></TableCell>
            </TableHead>
            <TableBody>
                {value.map(value => (
                    <TableRow>
                        <TableCell>{value.producto.nombre}</TableCell>
                        <TableCell>{value.cantidad}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
}





export default MiniTable