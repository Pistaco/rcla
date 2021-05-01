import FormStyledComponent from "./formulario/FormStyledComponent";

const Confirmacion = ({setConfirmacion}) =>
    <FormStyledComponent>
        <div className="form-style-8">
        <p>CONFIRMADO</p>
        <input value="Entendido!" type="button" onClick={() => setConfirmacion(false)}/>
        </div>
    </FormStyledComponent>




export default Confirmacion