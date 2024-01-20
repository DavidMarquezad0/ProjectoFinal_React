import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../products'
import { Navbar } from '../ui'
import { ProductsRoutes } from '../products'
import { LoginPage } from '../auth/pages'

export const AppRouter = () => {
    return  (
        <>
            <Navbar />
            <Routes>
            <Route path='Home' element={<HomePage />} />
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<ProductsRoutes/>} />
            </Routes>
        </>
    )
}