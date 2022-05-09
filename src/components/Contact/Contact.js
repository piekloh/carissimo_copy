import '../../styles/General.css'; // CSS
import '../../styles/Contact.css'; // CSS
import Navbar from '../Navbar.js'
import Footer from '../Footer.js'
import ContactText from './ContactText';

function Contact(){
  return (<>
  
    <div className="bgimg-1">
    <div className="caption1">
    <span><Navbar/></span>
    </div>
  </div>
  
  <div className="contact">
    <ContactText/>
  </div>
  <h3 className='seeYou'>Do zobaczenia!</h3>
    
  <div className="bgimg-4">
  <div className="footer">
      <Footer/>
    </div>
  </div>
  
    </>)
  
}

export default Contact;