
const IsSafe = ({setMensaje}) => {
    const onClick = () => {
        localStorage.setItem("formData", "")
        setMensaje(false)
    }
    return <>
        <h1>Ya existe una direccion!</h1>
        <button onClick={onClick}>
            Eliminar Direccion Actual
        </button>
    </>
}

export default IsSafe