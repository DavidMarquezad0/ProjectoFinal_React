export const ProductCard = ({
    id,
    product,
    description,
    size,

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
                        <h5>{product}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}