import Producto from "../Producto/index";
import {FlexColumn, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";
import {Link} from "react-router-dom";



const style = {marginTop: "5rem"}

const Jsx = ({lista}) => {

    const styleLink = {
        width: "100%"
    }
    const iterProducto = producto => (
            <Producto style={styleLink} producto={producto} id={producto.id}/>
    )

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
