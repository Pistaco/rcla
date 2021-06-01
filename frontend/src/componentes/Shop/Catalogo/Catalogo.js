import {useParams} from "react-router-dom";
import djangoAPIHandler from "../../djangoAPIHandler";

import CatalogoGeneral from "./CatalogoGeneral";

const Catalogo = () => {
    let {categoria} = useParams()
    const requestDataDjango = () => djangoAPIHandler.categorias.getProductosByCategoria(categoria)
    return <CatalogoGeneral requestDataDjango={requestDataDjango} depends={[categoria]}/>
}





export default Catalogo