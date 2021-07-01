import styled from "styled-components";
import {FlexCenter, FlexColumn } from "../reusable-styled/flexConteiners";
import {Link} from "react-router-dom"

const width = 30
const Box = styled.div`
  width: ${width + 15}%;
  height: 100vh;
`

const StyleBar = styled(FlexColumn)`
  position: fixed;
  width: ${width}%;
  height: 100vh;
  background-color: #001f54;
`
const StyleItem = styled(FlexCenter)`
  height: 100px;
  color: white;
  &:hover {
    background-color: #034078 ;
  }
`

const Item = props => (
    <Link to={`/dashboard/${props.url}`}>
        <StyleItem>
            {props.children}
        </StyleItem>
    </Link>
)


const SideBar = () => <>
    <Box/>
    <StyleBar>
        <Item url="crear">Crear</Item>
        <Item url="productos">Productos</Item>
        <Item url="pedidos">Pedidos</Item>
    </StyleBar>
    </>

export default SideBar