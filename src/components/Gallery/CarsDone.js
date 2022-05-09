import audiRS7Path from '../../img/audiRS7_1280x720.jpg'; //IMG
import maseratiGhibliPath from '../../img/maseratiGhibli_1280x720.jpg'; //IMG
import bmwE92Path from '../../img/bmwE92_1280x720.jpg'; //IMG
import lamborghiniGallardoPath from '../../img/lamborghiniGallardo_1280x720.jpg'; //IMG
import bmwM3F80Path from '../../img/bmwM3F80_1280x720.jpg'; //IMG

function CarsDone(){
  return(<>
  <CarDone name="audiRS7" path={audiRS7Path} alt="Audi RS7"/>

  <CarDone name="maseratiGhibli" path={maseratiGhibliPath }alt="Maserati Ghibli"/>

  <CarDone name="bmwE92" path={bmwE92Path} alt="BMW E92"/>

  <CarDone name="lamborghiniGallardo" path={lamborghiniGallardoPath} alt="Lamborghini Gallardo"/>

  <CarDone name="bmwM3F80" path={bmwM3F80Path} alt="BMW M3 F80"/>
  </>)
}

function CarDone(props){
  return(<div className='carDone'>

      <div className="overlay">
        <a href="#">
          <img className="img-fluid" src={props.path} alt={props.alt}></img>
        </a>
        <a className="link" href="#">
          <h4>{props.alt}</h4>
        </a>
      </div>

  </div>)
}

export default CarsDone;
