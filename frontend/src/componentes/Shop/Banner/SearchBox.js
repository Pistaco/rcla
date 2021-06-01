import styled from "styled-components";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const SearchGrid = styled.div`
    grid-column: 2 / 3;
    grid-row:  2 / span 1;
    align-self: center;
`

const style = {
    width: "100%"
}

const SearchForShop = () => {
    const [input, setInput] = useState([])
    const onChange = props => setInput(props.target.value)
    let history = useHistory()

    const checkIfIsEmpty = () => input.length === 0

    useEffect(() => {
        checkIfIsEmpty() ? history.push("/") : history.push(`/Search/${input}/0`)
    },[input])
    return (
        <SearchGrid>
            <div className="search-bar">
                <input type="text" value={input} onChange={onChange} name="search" pattern=".*\S.*" required/>
                <button className="search-btn" >
                    <span>Search</span>
                </button>
            </div>
        </SearchGrid>
    )
}

export default SearchForShop