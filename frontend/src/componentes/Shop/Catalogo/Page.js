import Producto from "../Producto/index";
import {FlexColumn, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyleRow = styled(FlexRowSpacedEvenly)`
    margin-top: 5rem;
  
    @media (max-width: 800px) {
      flex-direction: column;
    }
`

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
                <StyleRow>
                    { row1Put() }
                </StyleRow>
                <StyleRow>
                    { row2Put() }
                </StyleRow>
            </FlexColumn>
    )
}





export default Jsx
