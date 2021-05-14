import Producto from "../Producto";
import {FlexColumn, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";

const iterProducto = producto => <Producto producto={producto} id={producto.id}/>

const Jsx = ({first_row, secound_row}) => (
    <FlexColumn>
        <FlexRowSpacedEvenly>
            { first_row.map(iterProducto) }
        </FlexRowSpacedEvenly>
        <FlexRowSpacedEvenly style={{marginTop: "3rem"}}>
            { secound_row.map(iterProducto) }
        </FlexRowSpacedEvenly>
    </FlexColumn>
)

export default Jsx
