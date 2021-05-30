import styled from "styled-components";
import {FlexCenter, FlexRow} from "../../reusable-styled/flexConteiners";
import {useContext} from "react";
import {ContextMethods} from "./index";

const StyleRow = styled(FlexRow)``

const Item = styled(FlexCenter)`
    flex: ${props => props.first ? "2" : "1"};
    border: crimson solid 1px;
    p {
      font-size: ${props => props.principal ? "1rem" : "1.5rem"}
    }
`

export const Row = ({data}) => {
    const calcularPrecio = () => data.precio * data.cantidad
    const {deleteFromCart} = useContext(ContextMethods)
    return (
        <StyleRow>
            <Item first>
                {data.nombre}
            </Item>
            <Item>
                {data.precio}
            </Item>
            <Item>
                {data.cantidad}
            </Item>
            <Item>
                {calcularPrecio()}
            </Item>
            <Item><button onClick={() => deleteFromCart(data)}>Delete</button></Item>
        </StyleRow>
    )
}

export const RowPrincipal = () => (
    <StyleRow>
        <Item first principal> Producto(s) </Item>
        <Item principal> Precio Unitario </Item>
        <Item principal> Cantidad  </Item>
        <Item principal>Precio Total </Item>
        <Item principal>Remover</Item>
    </StyleRow>
)
