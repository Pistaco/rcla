import react, {useState} from "react"
import styled from "styled-components";
import {FlexCenter} from "../../reusable-styled/flexConteiners";
import fetchToDjoser from "./FetchToDjoser";

const StyledLogin = styled.div`
    width: 100px;
    height: 60px;
`
const Login = ({setToken}) => {
    const [loginState, setForm] = useState({
        "username": "",
        "password": "",
    })

    const setGeneral = opcion => props => setForm({...loginState, [opcion]: props.target.value})
    const setUserName = setGeneral("username")
    const setPassword = setGeneral("password")

    const handlerFetch = () => {
        const axiosRequest = fetchToDjoser(loginState)
        axiosRequest.then(
            handToken
        ).catch(value => console.log("cuek"))
    }
    const handToken = data => {
        setToken(data.data)
    }
    return <FlexCenter>
        <StyledLogin>
            <label>
                <p>Usuario</p>
                <input data-testid="usuario"  type="text" onChange={setUserName} value={loginState.username}/>
            </label>
            <label>
                <p>Contraseña</p>
                <input data-testid="password" type="password" onChange={setPassword} value={loginState.password} />
            </label>
            <div>
                <button  onClick={handlerFetch}>Submit</button>
            </div>
        </StyledLogin>
    </FlexCenter>
}

const LoginForm = () => {

}


export default Login