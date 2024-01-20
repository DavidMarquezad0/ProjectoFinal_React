import {Routes, Route, Navigate } from "react-router-dom"
import { ColeccionH, ColeccionM, SearchPage, ProductPage, HomePage } from "../pages"



export const ProductsRoutes = () => {
    return(
        <>
            <div className="container">
            <Routes>
            <Route path="home-Page" element={<HomePage/> }/>
            <Route path='coleccion-Hombres' element={<ColeccionH />} />
            <Route path='coleccion-Mujeres' element={<ColeccionM />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='product' element={<ProductPage />} />
            <Route path='/*' element={<Navigate to="home-Page" />} />
            </Routes>
            </div>
        </>
    )
}