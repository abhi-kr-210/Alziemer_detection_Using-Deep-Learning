import React from "react"
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from "./Component/Homes";
import Section2 from "./Component/Section2";
import Loginpage from "./Pages/Homes/Loginpage";
import ContactPage from "./Pages/Homes/ContactPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>  
        <Route path="/" element={<Homes />} />  
        <Route path="/about" element={<Section2 />} /> 
        <Route path="/login" element={<Loginpage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
