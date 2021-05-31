import {createContext, useState} from "react";

export const Context = createContext()

const CatalogoProvider = props => {
    const [busqueda, setBusqueda] = useState([])
    return (
        <Context.provider value={{
            setBusqueda,
        }}>
            {props.children}
        </Context.provider>
    )
}

export default CatalogoProvider