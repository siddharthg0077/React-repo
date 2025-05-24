import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import NavBar from './Component/NavBar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import EnquiryForm from './Pages/EnquiryForm'
import Footer from './Component/Footer'
import Products from './Pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
      
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/EnquiryForm" element={<EnquiryForm/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      
      

    </>
  )
}

export default App
