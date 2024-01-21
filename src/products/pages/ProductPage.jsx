import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../helpers"
import { useMemo } from "react"

export const ProductPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = useMemo(() => getProductById(id), [id])

    const onNavigateBack = () => {
        navigate(-1)
    } 
    
    if (!product) {
        return <Navigate to='coleccionH' />
    }

    return(
        <>
        <div className="m-auto container-sm row mt-5 animate__animated animate__fadeIn">
            <div className="col-4 col-sm-6">
                <img   
                src={`/img/${id}.jpg`}  
                alt={product.product}
                className="img-thumbnail animate__animated animate__fadeIn"
                />
            </div>  
            <div className="col-8 col-sm-6">
                <h3 className="text-uppercase">{product.product}</h3>
                <ul className="list-group list-goup-flush">
                    <li className="list-group-item">  
                        <b>Precio: </b>     
                        {product.price}
                    </li>
                    <li className="list-group-item">  
                        <b>Descripcion: </b>     
                        {product.description}
                    </li>
                </ul>
                {/* implementar boton de compras */}
            </div>
            
        </div>
        <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <button
            className="btn btn-outline-primary mt-2 mb-5"
            onClick={onNavigateBack}
            >
                Ver todos los productos
            </button>
        </div>
        </>
    )
}