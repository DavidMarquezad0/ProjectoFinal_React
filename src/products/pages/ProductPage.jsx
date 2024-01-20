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
        return <Navigate to='coleccionH' /> //reparar 
    }

    return(
        <>
        <div className="row animate__animated animate__fadeIn">
            <div className="col-4">
                <img 
                src={`/img/${id}.jpg`}  
                alt={product.product}
                className="img-thumbnail animate__animated animate__fadeIn"
                />
            </div>  
            <div className="col-8">
                <h3>{product.product}</h3>
                <ul className="list-group list-goup-flush">
                    <li className="list-grou-item">  
                        <b>Precio: </b>     
                        {product.price}
                    </li>
                    <li className="list-grou-item">  
                        <b>Descripcion: </b>     
                        {product.description}
                    </li>
                </ul>
                {/* implementar boton de compras */}
            </div>
            
        </div>
        <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <button
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
            >
                Ver todos los productos
            </button>
        </div>
        </>
    )
}