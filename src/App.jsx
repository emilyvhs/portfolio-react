import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Header from "./components/Header"

export default function App() {

  return (
    <BrowserRouter>

      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    
    
    </BrowserRouter>
    
  )

}