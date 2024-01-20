import { Link } from "react-router-dom"

export const ProductCard = ({
    id,
    product,
    price,

}) => {
    const ProductImgUrl = `/img/${id}.jpg`
    return (
        <div className="col mb-2">
            <div className="card animate__animated animate__zoomIn">
                <div className="row no-gutters">
                    <div className="col-4">
                        <Link to={`/product/${id}`}>
                        <img src={ProductImgUrl} className="card-img" alt={product} />
                        </Link>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{product}</h5>
                            <p className="card-text">{price}</p>

                            <button className="btn btn-primary">Añadir al carrito</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}