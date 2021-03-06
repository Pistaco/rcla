import "./search.css"
import react, {useEffect, useState} from "react";

import djangoAPIHandler from "../../../djangoAPIHandler";

const SearchBox = ({setLista, funcionOfDjango, funcionAlldjango}) => {

    const [input, setInput] = useState()
    const onChange = props => setInput(props.target.value)

    const refreshTable = () => {
        if(checkIfWhiteSpace()) {
            funcionAlldjango().then(setLista)
        }
        else {
            getDataFromBackEnd()
        }
    }

    const getDataFromBackEnd = () => {
        funcionOfDjango(input)
            .then(setLista)
    }

    const checkIfWhiteSpace = () => input === "" || input === undefined

    useEffect(refreshTable, [input])

    return (
        <div className="search-bar">
            <input type="text" value={input} onChange={onChange} name="search" pattern=".*\S.*" required/>
            <button className="search-btn" >
                <span>Search</span>
            </button>
        </div>
    )
}
export default SearchBox
