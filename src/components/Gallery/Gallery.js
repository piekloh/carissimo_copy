import '../../styles/General.css'; // CSS
import '../../styles/Gallery.css'; // CSS
import { Link } from "react-router-dom"; //Link
import Navbar from '../Navbar.js'
import Footer from '../Footer.js'
import CarsDone from './CarsDone';

function Gallery(){
  return (<>
  
    <div className="bgimg-1">
    <div className="caption1">
    <span><Navbar/></span>
    </div>
    <div className='adv'>
      <Link to="/contact"><h3><u>UMÓW SIĘ NA WIZYTĘ JUŻ TERAZ!</u></h3></Link>
    </div>
  </div>
  
  <div className='gallery'>
    <h3>Zrealizowane przez nas projekty:</h3>
    <CarsDone/>
  </div>
    
  <div className="bgimg-4">
  <div className="footer">
      <Footer/>
    </div>
  </div>
  
    </>)
}

export default Gallery;