import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Services from './components/Services/Services.js';
import Gallery from './components/Gallery/Gallery.js';
import Contact from './components/Contact/Contact.js';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/carissimo' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </>
  )
}

export default App;



