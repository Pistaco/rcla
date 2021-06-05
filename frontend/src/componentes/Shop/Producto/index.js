import styled from "styled-components";
import imageProducto from "../../../static/dummy-chronograph-watch-500x500.jpg"
import {useContext} from "react";

import {ContextMethods} from "../Carrito";
import {Link} from "react-router-dom";
import CarritoBtn from "./CarritoBtn";
import {FlexCenter, FlexRow} from "../../reusable-styled/flexConteiners";

const StyleProducto = styled.div`
    display: grid;
    grid-template-rows: 2.5fr 1fr;
    width: 15%;
    height: 40vh;
    
    @media (max-width: 800px) {
      width: auto;
      height: auto;
      margin-bottom: 30px;
    }
`

const Content = styled.div`
    border: 1px solid #5a6268;
    border-bottom: 0;
`

const PrecioSpace = styled(FlexRow)`
    border: 1px solid #5a6268;
    padding-left: 10px;
`

const NombreProducto = styled.p`
    font-size: 1.5rem;
`

const Precios = styled.div`

`


const Producto = ({producto, id}) => {
    const {addToCarrito} = useContext(ContextMethods)
    return (
        <StyleProducto id={id}>
            <Content>
                <Link to={`/Producto/${id}`}>
                    <img style={{width: "100%"}} src={imageProducto} alt={"dummy"}/>
                </Link>
            </Content>
            <PrecioSpace>
                <div style={{width: "100%"}}>
                    <NombreProducto> {producto.nombre}</NombreProducto>
                    <Precios>
                        <p>{producto.precio}</p>
                    </Precios>
                </div>
                <FlexCenter style={{width: "60%"}}>
                    <CarritoBtn onClick={() => addToCarrito(producto)}/>
                </FlexCenter>
            </PrecioSpace>
        </StyleProducto>
    )
}

export default Producto