import Table from "./table"
import SearchBox from "./search";

const ProductosPage = () => {
    return(
        <>

            <SearchBox onSubmit={() => console.log("uwu")}/>
            <Table/>
        </>
    )
}

export default ProductosPage