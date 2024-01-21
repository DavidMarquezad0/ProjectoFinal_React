import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        })
        
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary p-2">
                <Link className="navbar-brand" to="/Home">
                    <img width="150px" src="/img/logo small edit.png" alt="Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/coleccion-Hombres">Colección Hombres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/coleccion-Mujeres">Colección Mujeres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">Buscar Producto</NavLink>
                        </li>
                    </ul>
                </div>


                <div className="navbar-collapse collapse w-100 order-3 dual-collapse d-flex justify-content-end gap-2">
                    

                    <ul className="navbar-nav ml-auto">
                        <button className="nav-item nav-link btn" onClick={onLogout}>
                            <h5>Login</h5>
                        </button>
                    </ul>
                </div>
            </nav>


        </>
    )
}
