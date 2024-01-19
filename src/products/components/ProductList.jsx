import { ProductCard } from "./ProductCard"
import { getProductsByColeccion } from "../helpers"

export const ProductList = ({coleccion}) => {
    const products = getProductsByColeccion(coleccion)
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                products.map(product => (
                    <ProductCard key={product.id}
                  {...product}

                    />
            
                )) 
            }

        </div>
    )
}   