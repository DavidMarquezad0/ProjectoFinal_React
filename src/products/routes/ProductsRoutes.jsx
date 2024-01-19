import {Routes, Route, Navigate } from "react-router-dom"
import { ColeccionH, ColeccionM, SearchPage, ProductPage } from "../pages"

export const ProductsRoutes = () => {
    return(
        <>
            <div className="container">
            <Routes>
            <Route path='coleccion-Hombres' element={<ColeccionH />} />
            <Route path='coleccion-Mujeres' element={<ColeccionM />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='product' element={<ProductPage />} />
            <Route path='/*' element={<Navigate to="coleccionHombre" />} />
            </Routes>
            </div>
        </>
    )
}
