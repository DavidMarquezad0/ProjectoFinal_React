export const ProductCard = ({
    id,
    product,
    price,

}) => {
    const ProductImgUrl = `/img/${id}.jpg`
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ProductImgUrl} className="card-img" alt={product} />
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