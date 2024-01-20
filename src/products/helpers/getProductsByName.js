import { products } from "../products/products";

export const getProductsByName = (name = '') => {
    name = name.toLowerCase().trim()

    if (name === '') return []

    return products.filter(
        product => product.product.toLowerCase().includes(name)
    )
}