import { products } from  '../products/products'

export const getProductById = (id) => {
    return products.find((product) => product.id === id)
}