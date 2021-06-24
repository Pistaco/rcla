import {useEffect, useState} from "react";
import djangoAPIHandler from "../../djangoAPIHandler";


const Input = ({initial, id, changeColor}) => {
    const [input, setInput] = useState(initial)
    const requestDjango = () => djangoAPIHandler.pedidoProcess.check(id)

    const onChange = () => requestDjango()
        .then(() => {
            setInput(!input)
            changeColor()
        })
        .catch(console.log)


    return <input type="checkbox" checked={input} onChange={onChange} />
}

export default Input