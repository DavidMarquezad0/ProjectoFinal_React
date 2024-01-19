import { getProductsByColeccion } from "../helpers"

export const ProductList = ({coleccion}) => {
    const products = getProductsByColeccion(coleccion)
    return (
        <div>
            {
                products.map(product => (
                    <li key={product.id}>{product.product}</li>
                ))
            }

        </div>
    )
}   