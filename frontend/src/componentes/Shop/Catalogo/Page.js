import Producto from "../Producto";
import {FlexColumn, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";



const style = {marginTop: "3rem"}

const Jsx = ({lista}) => {

    const iterProducto = producto => <Producto producto={producto} id={producto.id}/>
    const row1Put = () => lista.slice(0, 5).map(iterProducto)
    const row2Put = () => lista.slice(5, 10).map(iterProducto)

    return (
    <FlexColumn>
        <FlexRowSpacedEvenly style={style}>
            { row1Put() }
        </FlexRowSpacedEvenly>
        <FlexRowSpacedEvenly style={style}>
            { row2Put() }
        </FlexRowSpacedEvenly>
    </FlexColumn>
    )
}





export default Jsx
