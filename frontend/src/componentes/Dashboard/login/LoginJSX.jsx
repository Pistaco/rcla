import {FlexColumnCenter} from "../../reusable-styled/flexConteiners";
import Mensaje from "./Mensaje";
import styled from "styled-components";

const StyledLogin = styled(FlexColumnCenter)`
`

const loginJsx = ({setters, loginState, handlerFetch, error}) => (
    <FlexColumnCenter>
        <form onSubmit={e => {
            e.preventDefault()
            handlerFetch()
        }}>
            <StyledLogin>
                <label>
                    <p>Usuario</p>
                    <input data-testid="usuario"  type="text" value={loginState.username} onChange={setters.username} />
                </label>
                <label>
                    <p>Contraseña</p>
                    <input data-testid="password" type="password" value={loginState.password} onChange={setters.password} />
                </label>
                <div>
                    <button  type="Submit" onClick={handlerFetch}>Submit</button>
                </div>
            </StyledLogin>
        </form>
        { error ? <Mensaje/> : null}
    </FlexColumnCenter>
)

export default loginJsx