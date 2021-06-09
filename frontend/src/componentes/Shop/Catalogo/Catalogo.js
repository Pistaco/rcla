import styled from "styled-components";
import {useParams} from "react-router-dom";
import djangoAPIHandler from "../../djangoAPIHandler";
import CatalogoGeneral from "./CatalogoGeneral";
import {FlexCenter} from "../../reusable-styled/flexConteiners";

const CategoriaActual = styled(FlexCenter)`
  font-size: 2rem;
  font-family: The-next-font, serif ;
  font-weight: bold;
  height: 50px;
  background-color: #F5C646;
`

const Catalogo = () => {
    let {categoria} = useParams()
    const requestDataDjango = () => djangoAPIHandler.categorias.getProductosByCategoria(categoria)
    return <>
        <CategoriaActual>{categoria}</CategoriaActual>
        <CatalogoGeneral requestDataDjango={requestDataDjango} depends={[categoria]}/>
        </>
}





export default Catalogo