import React from 'react'
import ReactDOM from 'react-dom/client'
import { EcommerceApp } from './EcommerceApp'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommerceApp />
    </BrowserRouter>
  </React.StrictMode>,
)
