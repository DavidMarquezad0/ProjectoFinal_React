import { ProductList } from "../components"

export const ColeccionH = () => {
    return(
        <>
        <header className="container justify-content-center text-center d-flex">
            <h1>Colección Hombres</h1>
        </header>
        <hr />
        <ProductList coleccion="hombre"/>
        </>
    )
}