import styled from "styled-components";
import Img from "./Img";
import Descripcion from "./Descripcion";
import Titulo from "./Titulo";
import CarritoBtn from "./CarritoBtn";
import Precio from "./Precio";
import {FlexRowSpacedBetween, FlexRowSpacedEvenly} from "../../reusable-styled/flexConteiners";

const Style = styled.div`
    display: grid;
    grid-template-rows: .3fr 1fr auto;
    grid-template-columns: 1fr .2fr 1fr;
    margin: 5rem 2rem;
    
    @media (max-width: 800px) {
      grid-template-rows: 1fr auto auto;
      grid-template-columns: 1fr;
    }
`

const StyleRow = styled(FlexRowSpacedEvenly)`
    grid-column: -2 / -1;
`


const ProductoPageStyle = ({data}) => (
    <Style>
        <Img image={data.img}/>
        <Titulo>{data.nombre}</Titulo>
        <Descripcion>
            {data.descripcion}
        </Descripcion>
        <StyleRow>
            <Precio>{data.precio}</Precio>
            <CarritoBtn data={data}/>
        </StyleRow>
    </Style>
)

export default ProductoPageStyle