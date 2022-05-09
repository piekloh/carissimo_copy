

function ContactText(){
  return(<>
  
  <h3>Skontaktuj się z nami!</h3>
    <div className="contactWrapper">
      <div className="contactCol">
        <ol>
          <li><i className="demo-icon icon-phone"> +48 123 456 789</i></li>
          <li><i className="demo-icon icon-mail"> <a className="footerLink" href = "mailto:kontakt@carissimo.pl">kontakt@carissimo.pl</a></i></li>
          <li><i className="demo-icon icon-location"> <a className="footerLink" href="https://goo.gl/maps/HHPHK2SQuLAW5Gbe9" target="_blank">Sosnowa 24, 54-015 Wrocław</a></i></li>
        </ol>
      </div>

      <div className="hours">
        Godziny otwarcia:
        <ol>
        <li>Poniedziałek: 8<sup>00</sup> - 18<sup>00</sup></li>
        <li>Wtorek: 8<sup>00</sup> - 18<sup>00</sup></li>
        <li>Środa: 8<sup>00</sup> - 18<sup>00</sup></li>
        <li>Czwartek: 8<sup>00</sup> - 18<sup>00</sup></li>
        <li>Piątek: 8<sup>00</sup> - 18<sup>00</sup></li>
        <li>Sobota: 10<sup>00</sup> - 14<sup>00</sup></li>
        <li>Niedziela: nieczynne</li>
        </ol>
      </div>
    </div>

    <div className="map">
    <iframe className="img-fluid" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9223.370219053597!2d20.990938040761808!3d52.2442000196172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed229a25a9d2b%3A0x4f0a8ec831854836!2sSosnowa%2024%2C%2005-075%20Warszawa!5e0!3m2!1spl!2spl!4v1651785366394!5m2!1spl!2spl" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
  </>)
  
}

export default ContactText;