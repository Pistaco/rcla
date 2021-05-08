import Form from "./FormStyledComponent";
export default ({logic, value, submit}) => <Form>

    <div className="form-style-8">
        <h2>Crear Producto</h2>
        <form >
            <input  value={value.nombre} type="text" name="nombre" placeholder="Nombre" onChange={logic}/>
            <input value={value.precio} type="number" name="precio" placeholder="Precio" onChange={logic}/>
            <input value={value.categoria} type="text" name="categoria" placeholder="Categoria" onChange={logic}/>
            <textarea name="descripcion" value={value.descripcion} placeholder="Descripcion" onChange={logic}/>
            <input data-testid="boton-submit" type="button" value="Submit" onClick={submit}/>
        </form>
    </div>
</Form>
