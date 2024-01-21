import { Routes, Route } from 'react-router-dom'
import { Footer } from '../ui'
import { ProductsRoutes } from '../products'
import { LoginPage } from '../auth/pages'

export const AppRouter = () => {
    return  (
        <>
            
            <Routes>
            
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<ProductsRoutes/>} />
            </Routes>
            <Footer/>
        </>
    )
}