import '../../styles/AboutUs.css'; // CSS

function Timeline(){
  return(
  <>
    <ul className='timelineList'>
      <li className='oddItem'>
        <div>
          <time>2010</time>
          <p>Powstanie marki Carissimo.
          </p>
        </div>
      </li>

      <li className='evenItem'>
        <div>
          <time>2011</time>
          <p>Nawiązanie współpracy z marką Spraila.
          </p>
        </div>
      </li>
      <li className='oddItem'>
        <div>
          <time>2011</time>
          <p>100. zadowolony klient.
          </p>
        </div>
      </li>
      <li className='evenItem'>
        <div>
          <time>2013</time>
          <p>Nawiązanie współpracy z BMW Polska w zakresie świadczenia usług lakierniczo-detailingowych.  
          </p>
        </div>
      </li>
      <li className='oddItem'>
        <div>
          <time>2015</time>
          <p>Otwarcie oddziału studia Carissimo w Warszawie, przy ul. Narodowej 20.
          </p>
        </div>
      </li>
      <li className='evenItem'>
        <div>
          <time>2017</time>
          <p>Podpisanie umowy o współpracę z Auto Finesse. Od teraz Carissimojest oficjalnym dystrybutorem produktów Auto Finesse. 
          </p>
        </div>
      </li>
      <li className='oddItem' style={{borderBottom: "none"}}>
        <div>
          <time>2020</time>
          <p>Zlot miłośników auto detailingu "SONAX Quality Meeting" zorganizowany wspólnie z firmą SONAX w Gdańsku.
          </p>
        </div>
      </li>
    </ul>
  </>)
}

export default Timeline;