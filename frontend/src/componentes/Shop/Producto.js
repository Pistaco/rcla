import styled from "styled-components";
import imageProducto from "./../../static/dummy-chronograph-watch-500x500.jpg"

const StyleProducto = styled.div`
    display: grid;
    grid-template-rows: 2.5fr 1fr;
    width: 15%;
    height: 40vh;
`

const Content = styled.div`
    border: 1px solid #5a6268;
    border-bottom: 0;
`

const PrecioSpace = styled.div`
    border: 1px solid #5a6268;
    padding-left: 10px;
`

const NombreProducto = styled.p`
    font-size: 1.5rem;
`

const Precios = styled.div`

`

const Producto = ({producto, id}) => (
    <StyleProducto id={id}>
        <Content>
            <img style={{width: "100%"}} src={imageProducto} alt={"dummy"}/>
        </Content>
        <PrecioSpace>
            <NombreProducto> {producto.nombre}</NombreProducto>
            <Precios>
                <p>{producto.precio}</p>
            </Precios>
        </PrecioSpace>
    </StyleProducto>
)

export default Producto