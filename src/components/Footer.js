import { Link } from "react-router-dom";

function Footer(){
  return (<>

    <div className="footerCol">
      <ol>
        <li><p><b>Kontakt</b></p></li>
        <li><i className="demo-icon icon-phone"> +48 123 456 789</i></li>
        <li><i className="demo-icon icon-mail"> <a className="footerLink" href = "mailto:kontakt@carissimo.pl">kontakt@carissimo.pl</a></i></li>
        <li><i className="demo-icon icon-location"> <a className="footerLink" href="https://goo.gl/maps/HHPHK2SQuLAW5Gbe9" target="_blank">Sosnowa 24, 54-015 Wrocław</a></i></li>
      </ol>
    </div>

    <div className="footerCol">
      <ol>
        <li><p><b>Social media</b></p></li>
        <li><i className="demo-icon icon-facebook"> <a className="footerLink" href="https://www.facebook.com/" target="_blank">carissimo</a></i></li>
        <li><i className="demo-icon icon-instagram"> <a className="footerLink" href="https://www.instagram.com/" target="_blank">@carissimo</a></i></li>
        <li><i className="demo-icon icon-youtube-play"> <a className="footerLink" href="https://www.youtube.com/" target="_blank">Carissimo Wrocław</a></i></li>
      </ol>
    </div>

    <div className="footerCol">
      <ol>
        <li><p><b>Przydatne linki</b></p></li>
        <li><i className="demo-icon icon-group"> <Link to="/aboutUs" className="footerLink">O nas</Link></i></li>
        <li><i className="demo-icon icon-question-circle-o"> <a className="footerLink" href="https://www.kuro.pl/faq" target="_blank">FAQ</a></i></li>
        <li></li>
      </ol>
    </div>

    <div className="footerCol copyright">
      <ol>
        <b>
          <li><p>COPYRIGHT 2022</p></li>
          <li><p>&copy; Carissimo</p></li>
          <li><p><a className="footerLink" href="https://github.com/piekloh" target="_blank">Wykonanie: Krzysztof Kukiełka</a></p></li>
        </b>
      </ol>
    </div>
    
  </>)
}

export default Footer;