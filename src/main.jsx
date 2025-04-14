import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <App />
    <Footer />
    </BrowserRouter>
  </StrictMode>,
)
