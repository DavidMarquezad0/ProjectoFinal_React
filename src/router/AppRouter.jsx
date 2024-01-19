import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../auth'
import { Navbar } from '../ui'
import { ProductsRoutes } from '../products'

export const AppRouter = () => {
    return  (
        <>
            <Navbar />
            <Routes>
            <Route path='Home' element={<HomePage />} />
            <Route path='/*' element={<ProductsRoutes/>} />
            </Routes>
        </>
    )
}