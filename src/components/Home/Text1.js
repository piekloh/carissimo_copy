import '../../styles/Home.css'; //CSS
import logo512Path from '../../img/logo512_black.png'; //IMG

function Text1(){
  return(<div id='text1'>
  <img src={logo512Path} alt='carissimo_logo'></img>
    <div className="text1">
      <h3 className='homeTitle'><b>CARISSIMO - Care &amp; Detailing</b></h3>
        <p className='paragraph'>W <b>CARISSIMO</b> Detailing jest naszą pasją! Jesteśmy grupą zapalonych hobbystów, dla których samochody stały się znaczącą częścią życia. To w połączeniu z naszym bogatym doświadczeniem, kwalifikacjami oraz specjalistyczną wiedzą sprawia, że możesz spokojnie oddać swoje auto w nasze ręce. Zadbamy o to, żeby było u nas w pełni bezpieczne. Zaopiekujemy się nim, a Ty odbierzesz je i z zachwytem zauważysz, że zostało pięknie odnowione, zyskało dawną świeżość oraz blask. Działamy we Wrocławiu, a więc zachęcamy mieszkańców tego miasta oraz okolicy do odwiedzenia naszego studia. Oferujemy możliwość umówienia się na konkretną godzinę, dzięki czemu klienci mogą oszczędzić czas.</p>
    </div>
  </div>)
}

export default Text1;