import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { getProductsByName } from "../helpers/getProductsByName"
import queryString from 'query-string'
import { ProductCard } from '../components/ProductCard'

export const SearchPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const { searchText, onInputChange } = useForm({
        searchText: q,
    })

    const products = getProductsByName(q)


    const onSearchSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${searchText}`)
    }

    return (
        <>
            <div className="row container mt-5">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control"
                            placeholder="Buscar producto"
                            type="text"
                            name="searchText"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button
                            className="btn btn-outline-primary mt-2"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Resultados</h3>
                    <hr />

                    {/* <div className="alert alert-primary">
                Buscar producto
            </div>

            <div className="alert alert-danger">
                Producto no encontrado.
            </div> */}

                    {
                        (q === '')
                            ?
                            <div className="alert alert-primary">
                                Buscar producto
                            </div>
                            : (products.length === 0) &&
                            <div className="alert alert-danger">
                                No se encontró <b>{q}</b>.
                            </div>
                    }

                    {
                        products.map(product => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}