import { Link, NavLink, useNavigate } from "react-router-dom"
export const Navbar = () => {
    const navigate = useNavigate()

    const onHome = () => {
        navigate('/home', {
            replace: true,
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary p-3">
                <Link
                    className="navbar-brand"
                    to="/Home">
                    Marquez
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            className="nav-item nav-link"
                            to="/coleccion-Hombres"
                        >
                            Colección Hombres
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            to="/coleccion-Mujeres"
                        >
                            Colección Mujeres
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <button className="nav-item nav-link btn"
                        onClick={onHome}
                        >
                            Home
                        </button>
                    </ul>
                </div>
            </nav>

        </>
    )
}
