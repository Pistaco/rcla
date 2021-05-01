import styled from "styled-components";
import {FlexCenter, FlexColumn } from "../reusable-styled/flexConteiners";
import {Link} from "react-router-dom"

const StyleBar = styled(FlexColumn)`
  width: 30vw;
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


const SideBar = () => <StyleBar>
    <Item url="crear">Crear</Item>
    <Item url="productos">Productos</Item>
    <Item>Categorias</Item>
</StyleBar>

export default SideBar