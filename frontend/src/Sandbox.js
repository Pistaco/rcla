import {AutoSizer, Column, List, Table} from "react-virtualized"
import {FixedSizeList} from "react-window";
import {FlexCenter, FlexRow} from "./componentes/reusable-styled/flexConteiners";
import {TableCell, TableHead, TableRow} from "@material-ui/core";

const lista = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
]

const TABLE = () => (
    <table className="table">
        <thead>
        <tr>
            <th>UNO</th>
            <th>DOS</th>
        </tr>
        </thead>
        <tbody>
        <FixedSizeList itemCount={lista.lenght} itemSize={100} width={100} height={100}>
            {({index, style}) => (
                <tr>
                    <th>{lista[index]}</th>
                    <th>AAAAA</th>
                </tr>
            )}
        </FixedSizeList>
        </tbody>
    </table>

)
const Row = ({ index, style }) => (
    <>
        <TableCell >{index}</TableCell>
        <TableCell > {index}</TableCell>
        </>
);

const Example = () => (
  <FixedSizeList
    height={150}
    itemCount={1000}
    itemSize={35}
  >
    {Row}
  </FixedSizeList>
);

const Sandbox = () => {
    const generador = (({index, style}) => <div style={style}>AAA</div>)
    return <>
        <table className="table">
            <TableHead>
                <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>B</TableCell>
                </TableRow>
            </TableHead>
            <tbody>
                <Example/>
            </tbody>
        </table>
    </>
}

export default Sandbox
