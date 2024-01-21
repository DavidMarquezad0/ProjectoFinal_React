import { ProductCard } from "./ProductCard"
import { getProductsByColeccion } from "../helpers"

export const ProductList = ({ coleccion }) => {
    const products = getProductsByColeccion(coleccion)
    return (
        <div className="row row-cols-4 row-cols-md-3 g-3">
            {products.map((product) => (
                <div key={product.id} className="col mb-2">
                    <ProductCard {...product} />
                </div>
            ))}
        </div>

    )
}   