import CatalogoGeneral from "./CatalogoGeneral";
import djangoAPIHandler from "../../djangoAPIHandler";
import {useParams} from "react-router-dom";

const CatalogoSearch = () => {
    let {search} = useParams()
    const requestDataFromDjango = () => djangoAPIHandler.productos.searchProducto(search)
    return <CatalogoGeneral requestDataDjango={requestDataFromDjango} depends={[search]} />
}

export default CatalogoSearch