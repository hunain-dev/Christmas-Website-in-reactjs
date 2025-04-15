import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Navbar/Header/Header.jsx'
import Footer from './Navbar/Footer/Footer.jsx'
import App from './App.jsx'
import Cartcontext from './Navbar/Cart/Cartcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartcontext>
    <BrowserRouter>
    <Header />
    <App />
    <Footer />
    </BrowserRouter>
    </Cartcontext>



  </StrictMode>,
)
