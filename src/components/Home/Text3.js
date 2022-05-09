import '../../styles/Home.css'; // CSS
import BMWPath from '../../img/bmwLogo.jpg'; //IMG
import AutoFinessePath from '../../img/afLogo.jpg'; //IMG
import SprailaPath from '../../img/sprailaLogo.jpg'; //IMG
import SonaxPath from '../../img/sonaxLogo.jpg'; //IMG


function Text3(){
  return(
  <div className='row brandLogos container'>

    <Text name="BMW" href="https://www.bmw.pl/pl/index.html" src={BMWPath}/>

    <Text name="Auto Finesse" href="https://www.autofinesse.com/en" src={AutoFinessePath}/>

    <Text name="Spraila" href="https://www.auto-k.de/en/spray-paints/more-brands/spraila/spraila-products/spraila-paint-sprays/" src={SprailaPath}/>

    <Text name="SONAX" href="https://www.sonax.pl/" src={SonaxPath}/>

  </div>
  )
}

function Text(props){
  return(
  <div className="col-md-6 col-xl-3">
    <figure>
      <a href={props.href} target="_blank" rel="noreferrer"><img className='img-fluid' src={props.src} alt={props.name}></img>
      </a>
      <figcaption>{props.name}</figcaption>
    </figure>
  </div>)
}

export default Text3;