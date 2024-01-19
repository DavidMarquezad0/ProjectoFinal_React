import { ProductList } from "../components"

export const ColeccionH = () => {
    return(
        <>
        <header className="container justify-content-center text-center d-flex">
            <h1 className="text-uppercase">Colección Hombres</h1>
        </header>
        <hr />
        <ProductList coleccion="hombre"/>
        </>
    )
}