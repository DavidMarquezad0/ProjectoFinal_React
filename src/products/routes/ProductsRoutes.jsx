import { Routes, Route, Navigate } from "react-router-dom"
import { ColeccionH, ColeccionM, SearchPage, ProductPage, HomePage } from "../pages"
import { Navbar } from "../../ui"



export const ProductsRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='Home' element={<HomePage />} />
                <Route path='coleccion-Hombres' element={<ColeccionH />} />
                <Route path='coleccion-Mujeres' element={<ColeccionM />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='product/:id' element={<ProductPage />} />
                <Route path='/*' element={<Navigate to="" />} />
            </Routes>
        </>
    )
}