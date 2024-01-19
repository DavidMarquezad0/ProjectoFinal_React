import { ProductList } from "../components"

export const ColeccionM = () => {
    return(
        <>
        <header className="container justify-content-center text-center d-flex">
            <h1 className="text-uppercase">Colección Mujeres</h1>
        </header>
        <hr />
        <ProductList coleccion="mujer"/>
        </>
    )
}