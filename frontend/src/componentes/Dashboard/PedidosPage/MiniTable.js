import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {useEffect} from "react";

const MiniTable = ({pedido_productos}) => {
    useEffect(() => console.log(pedido_productos),[])
    const calcularTotal = () => pedido_productos.reduce(
        (acumulator, valor) => valor.producto.precio * valor.cantidad + acumulator, 0
    )

    return <Box margin={5}>
        <h2>Productos</h2>
        <Table >
            <TableHead>
                <TableCell><p>nombre</p></TableCell>
                <TableCell><p>cantidad</p></TableCell>
                <TableCell><p>precio unitario</p></TableCell>
                <TableCell><p>ingreso</p></TableCell>
            </TableHead>
            <TableBody>
                {pedido_productos.map(value => (
                    <TableRow>
                        <TableCell>{value.producto.nombre}</TableCell>
                        <TableCell>{value.cantidad}</TableCell>
                        <TableCell>{value.producto.precio}</TableCell>
                        <TableCell>{value.cantidad * value.producto.precio}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <Box marginTop={5}>
                <h3>Ingreso total: {calcularTotal()}</h3>
            </Box>
        </Table>
    </Box>
}





export default MiniTable