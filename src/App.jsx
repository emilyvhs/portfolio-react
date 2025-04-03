import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"

export default function App() {

  return (
    <BrowserRouter>    

      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    
      <div>
        <Footer />
      </div>
 
    </BrowserRouter>
    
  )

}