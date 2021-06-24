import Row from "./Row";
import Input from "./Input"
const Table = ({lista, refreshTable}) => (
    <table className="table">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Numero</th>
            <th>Correo</th>
            <th>Calle</th>
            <th>Fecha compra</th>
            <th>Entregado</th>
            <th>Codigo</th>
        </tr>
        </thead>
        <tbody>
            {lista.map((value, index) => <Row value={value} key={index}/>)}
        </tbody>
    </table>
)

export default Table