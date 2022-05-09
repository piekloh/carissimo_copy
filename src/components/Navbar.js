import { Link } from "react-router-dom";


function Navbar(){
  return (
  <nav className="navbar navbar-dark navbarbgcolor navbar-expand-xl">

<Link to="/" className="logoImage"><p id="logo"></p></Link>    
<button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Przełącznik nawigacji"><span className="navbar-toggler-icon"></span></button>

<div className="collapse navbar-collapse" id="mainmenu">

  <ul className="navbar-nav">
     
    <li className="nav-item"><Link to="/">STRONA GŁÓWNA</Link>
    </li>
    <li className="nav-item"><Link to="/aboutUs">O NAS </Link></li>

    <li className="nav-item"><Link to="/services">USŁUGI </Link></li>

    <li className="nav-item"><Link to="/gallery">REALIZACJE </Link></li>

    <li className="nav-item"><Link to="/contact">KONTAKT </Link></li>
  </ul>

</div>
  </nav>)
}

export default Navbar;