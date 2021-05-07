import "./search.css"
import react, {useEffect, useState} from "react";

import djangoAPIHandler from "../../../djangoAPIHandler";

const SearchBox = ({setLista, requestApi}) => {

    const [input, setInput] = useState()
    const onChange = props => setInput(props.target.value)

    const refreshTable = () => {
        if(checkIfWhiteSpace()) {
            requestApi()
        } else {
            getDataFromBackEnd()
        }
    }

    const getDataFromBackEnd = () => {
        const request = djangoAPIHandler.productos.searchProducto(input)
        request
            .then(value => setLista(value))
    }

    const checkIfWhiteSpace = () => input === ""

    useEffect(refreshTable, [input])

    return (
        <form  action="" className="search-bar">
            <input type="search" value={input} onChange={onChange} name="search" pattern=".*\S.*" required/>
            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
    )
}
export default SearchBox
