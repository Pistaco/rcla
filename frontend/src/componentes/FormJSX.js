import Form from "./FormStyledComponent";

export default ({logic, value}) => <Form>
    <div className="form-style-8">
        <h2>Crear Producto</h2>
        <form>
            <input  value={value.nombre} type="text" name="nombre" placeholder="Nombre" onChange={logic}/>
            <input value={value.precio} type="number" name="precio" placeholder="Precio" onChange={logic}/>
            <input type="file" name="field2"/>
            <textarea name="descripcion" value={value.descripcion} placeholder="Descripcion" onChange={logic}/>
            <input type="button" value="Submit"/>
        </form>
    </div>
</Form>
