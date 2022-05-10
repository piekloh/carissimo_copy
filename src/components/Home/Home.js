import { Link } from "react-router-dom"; //Link
import '../../styles/General.css'; // CSS
import Navbar from '../Navbar.js' // Menu
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Footer from '../Footer.js'


function Home(){
  return (<>
  
<div className="bgimg-1">
  <div className="caption1">
    <span><Navbar/></span>
  </div>
  <div className='adv'>
    <Link to="/contact"><h3><u>UMÓW SIĘ NA WIZYTĘ JUŻ TERAZ!</u></h3></Link>
  </div>
</div>

<Text1/>

<div className="bgimg-2">
  <div className="caption">
   <a href="#ytMovie"><h3>&#8595; <u>ZOBACZ SAM JAK PRACUJEMY</u> &#8595;</h3></a> 
  </div>
</div>
<a name="ytMovie"></a>
<Text2/>

<div className="bgimg-3">
  <div className="caption">
  <h3>NASI PARTNERZY:</h3>
  </div>
</div>


<Text3/>


<div className="bgimg-4">
  <div className="footer">
    <Footer/>
  </div>
  
</div>

  </>)
}

export default Home;