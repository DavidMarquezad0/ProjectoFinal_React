import { ProductList } from "../components"

export const ColeccionM = () => {
    return(
        <>
        <div className="container justify-content-center text-center animate__animated animate__zoomIn">
            <h1>Colección Mujeres</h1>
        </div>
        <hr />
        <ProductList coleccion="mujer"/>
        </>
    )
}