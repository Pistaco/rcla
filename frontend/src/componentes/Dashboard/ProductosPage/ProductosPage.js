import Table from "./table"
import SearchBox from "./search/search";

const ProductosPage = () => {
    return(
        <>

            <SearchBox onSubmit={() => console.log("uwu")}/>
            <Table/>
        </>
    )
}

export default ProductosPage