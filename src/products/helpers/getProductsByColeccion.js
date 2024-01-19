import { products } from  '../products/products'

export const getProductsByColeccion = (coleccion) => {
    const validColeccion = ['hombre', 'mujer']

    if (!validColeccion.includes(coleccion)) {
        throw new Error(`Coleccion "${coleccion} no es correcto`)
    }

    return products.filter(product => product.coleccion === coleccion)
}