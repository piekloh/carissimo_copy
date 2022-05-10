import '../../styles/General.css'; // CSS
import '../../styles/Services.css'; // CSS
import { Link } from "react-router-dom"; //Link
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import ServicesTable from './ServicesTables.js';

function Services(){
  return (<>
  
    <div className="bgimg-1">
    <div className="caption1">
    <span><Navbar/></span>
    </div>
    <div className='adv'>
      <Link to="/contact"><h3><u>UMÓW SIĘ NA WIZYTĘ JUŻ TERAZ!</u></h3></Link>
    </div>
  </div>
  
  <div className="services">
    <div className='servicesTable'>
      <ServicesTable/>
    </div>
  </div>
  
  <div className="bgimg-4">
  <div className="footer">
      <Footer/>
    </div>
  </div>
  
    </>)
}

export default Services;