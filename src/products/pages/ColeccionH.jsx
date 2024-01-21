import { ProductList } from "../components"

export const ColeccionH = () => {
    return(
        <>
        <div className="container-fluid justify-content-center text-center animate__animated animate__zoomIn">
            <h1>Colección Hombres</h1>
        </div>
        <hr />
        <ProductList coleccion="hombre"/>
        </>
    )
}