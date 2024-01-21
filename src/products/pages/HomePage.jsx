import { Link } from "react-router-dom"

export const HomePage = ({ id }) => {


    return (
        <div className="container-sm container m-auto row mt-3 animate__animated animate__fadeIn">
            <div className="col-6">

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Link to={`/product/${id}`}>
                                <img src="/img/model1.jpg" className="d-block w-100" alt="model1" />
                            </Link>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/model2.jpg" className="d-block w-100" alt="model2" />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/model3.jpg" className="d-block w-100" alt="model3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>

            <div className="container-sm col-6 d-flex justify-content-center align-items-center">
                <div>
                    <h3 className="text-center">"La misma elegancia, con un toque moderno.
                        Marquez, el estilo que se adapta a ti."</h3>
                </div>

            </div>
            <br />
            <section className="mt-xxl-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Productos en descuentos</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/cazadora-estampada.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Cazadora con Estampado</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 250</h4>
                                <p className="bg-warning">S/ 175</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/camiseta-blanca.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Camiseta Blanca</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 130</h4>
                                <p className="bg-warning">S/ 65</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/short-denim.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Short Denim</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 117</h4>
                                <p className="bg-warning">S/ 81.90</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <section className="mt-xxl-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Productos Nuevos</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/camisa melonnew.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Camisa Melon</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 250</h4>
                                <p className="bg-warning">S/ 175</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/falda-blanca.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Falda Blanca</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 130</h4>
                                <p className="bg-warning">S/ 65</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <a className="d-flex justify-content-center">
                            <img className="w-100" src="/img/pantalón-cafe.jpeg" alt="" />
                        </a>
                        <h4 className="text-center">Short Denim</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex gap-3">
                                <h4 className="text-decoration-line-through">S/ 117</h4>
                                <p className="bg-warning">S/ 81.90</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    )
}