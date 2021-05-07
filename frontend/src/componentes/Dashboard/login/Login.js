import react, {useState} from "react"
import djangoAPIHandler from "../../djangoAPIHandler";
import LoginJSX from "./LoginJSX";

const Login = ({setToken}) => {

    const [loginState, setForm] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState(false)

    const setGeneral = opcion => props => setForm({...loginState, [opcion]: props.target.value})

    const setters = {
        username: setGeneral("username"),
        password: setGeneral("password")
    }

    const handlerFetch = () => {
        djangoRequestLogin()
            .then(handToken)
            .catch(handError)
    }

    const djangoRequestLogin = () => djangoAPIHandler.auth.login(loginState)

    const handError = error => {
        setError(true)
    }
    const handToken = data => {
        setToken(data)
    }

    return <LoginJSX
        handlerFetch={handlerFetch}
        error={error}
        setters={setters}
        loginState={loginState}
    />

}

export default Login