import Formulario from "./formulario/Formulario";
import Confirmacion from "./Confirmacion";
import {useState} from "react";

import {FlexColumnCenter} from "../../reusable-styled/flexConteiners";

const CrearPage = () => {
    const [confirmacion, setConfirmacion] = useState()
    const changeStateValidation = () => confirmacion ? setConfirmacion(false) : setConfirmacion(true)
    return (
        <FlexColumnCenter style={{"height": "100%" }}>
            <Formulario changeStateValidation={changeStateValidation}/>
            {confirmacion ? <Confirmacion setConfirmacion={setConfirmacion}/> : null}
        </FlexColumnCenter>
    )
}

export default CrearPage
