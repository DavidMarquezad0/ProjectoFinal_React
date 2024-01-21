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

    const showSearch = (q.length === 0)
    const ShowError = (q.length > 0 && products.length === 0)

    const onSearchSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${searchText}`)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5 animate__animated animate__fadeIn">
                    <div className="col-12 col-md-5 mb-4">
                        <h4>Buscar</h4>
                        <hr />
                        <form onSubmit={onSearchSubmit}>
                            <input
                                className="form-control"
                                placeholder="Buscar producto"
                                type="text"
                                autoComplete="off"
                                name="searchText"
                                value={searchText}
                                onChange={onInputChange}
                            />
                            <button className="btn btn-outline-primary mt-2" type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                    <div className="col-12 col-md-7">
                        <h3>Resultados</h3>
                        <hr />

                        <div
                            className="alert alert-primary animate__animated animate__fadeIn"
                            style={{ display: showSearch ? '' : 'none' }}
                        >
                            Buscar producto
                        </div>

                        <div
                            className="alert alert-danger animate__animated animate__fadeIn"
                            style={{ display: ShowError ? '' : 'none' }}
                        >
                            No se encontró <b>{q}</b>
                        </div>

                        {products.map((product) => (

                            <div key={product.id} className="col-6">
                                <ProductCard {...product} />
                            </div>

                        ))}
                    </div>

                    <div className="d-flex justify-content-center mb-4 animate__animated animate__fadeInRight">
                        <div className="card"> 
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>"Viste para el trabajo que deseas tener, vive la vida que deseas vivir y las metas que deseas alcanzar."</p>
                                    <footer className="blockquote-footer">Marquez</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}