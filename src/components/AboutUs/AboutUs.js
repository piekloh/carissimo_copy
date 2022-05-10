import '../../styles/General.css'; //CSS
import '../../styles/AboutUs.css'; //CSS
import { Link } from "react-router-dom"; //Link
import Navbar from '../Navbar.js' //COMP
import Footer from '../Footer.js' //COMP
import Timeline from './Timeline.js' //COMP
import timSamuel from '../../img/timSamuel.jpg'; //IMG

function AboutUs(){
  return (<>
  
    <div className="bgimg-1">
    <div className="caption1">
    <span><Navbar/></span>
    </div>
    <div className='adv'>
      <Link to="/contact"><h3><u>UMÓW SIĘ NA WIZYTĘ JUŻ TERAZ!</u></h3></Link>
    </div>
  </div>
  <h3 className='founderHeader'>Kim jesteśmy?</h3>
  <div className="aboutUs">
    <div className='founderDesc'>
      <p>Założycielem cetrum jest Tim Samuel - specjalista z ponad 16-letnim doświadczeniem w branży lakierniczo-detailingowej. </p><p>Marka Carissimo powstała w 2010r. z połączenia pasji do motoryzacji i estetyki. Już od ponad 10 lat świadczymy najwyższej jakości usługi auto detailingu we Wrocławiu. Nasz zespół tworzą specjaliści z wieloletnim doświadczeniem w branży motoryzacyjnej, dzięki czemu możemy działać profesjonalnie i kompleksowo. Nasza działalność obejmuje szeroki zakres usług – od czyszczenia wnętrza samochodu, przez zmianę jego koloru, aż po oklejanie folią ochronną XPEL czy wyciąganie wgnieceń metodą PDR. Mamy akredytację XPEL oraz 4nano – sprawdzonych marek, na których produktach pracujemy. Zapraszamy Klientów z Wrocławia i okolic! </p>
    </div>
    <div className='founderPhoto'>
    <img className='img-fluid' src={timSamuel} alt="Tim Samuel"></img>
    </div> 
  </div>
  
  <div className="bgimg-2">
    <div className="caption">
    <h3>HISTORIA FIRMY:</h3>
    </div>
  </div>
  
  <div className='timeline'>
    <Timeline/>
  </div>

  <div className="bgimg-4">
    <div className="footer">
      <Footer/>
    </div>
  </div>
  
    </>)
}

export default AboutUs;