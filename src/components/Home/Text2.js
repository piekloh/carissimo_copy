import '../../styles/Home.css'; // CSS

function Text2(){
  return(
  <div className="text1">

    <p className='paragraph'>
      Na poniższym filmie pokazano serię zabiegów pielęgnacyjno-detailingowych na BMW serii 5 G30. Wykonano m.in.:
    </p>
    <ul id='listHome'>
        <li>odświeżenie elementów black piano</li>
        <li>aplikacja folii PPF (maska, zderzak, reflektory, wnęki klamek, parapet tylnego zderzaka)</li>
        <li>aplikacja powłoki ceramicznej na lakier Autotriz V-1 Light</li>
        <li>aplikacja powłoki na felgi Autotriz V-4</li>
        <li>aplikacja powłoki hydrofobowej na szyby Autotriz V-5</li>
        <li>aplikacja powłoki na tapicerkę skórzaną Autotriz V-6</li>
      </ul>
      <div className='videoWrapper paragraph'>
        <iframe className="img-fluid " width="100%" height="200px" title='video1' frameBorder="0" allowFullScreen src="https://www.youtube.com/embed/6_a66jBkb1c">
        </iframe>
      </div>
  </div>
  
  
  
  





//   <div id='text2'>
// <div className="text2">
//   <iframe className="img-fluid float-start mx-auto mt-1 mb-5" src="https://www.youtube.com/embed/6_a66jBkb1c">
//   </iframe>

//   <span className='paragraph'>
//     ssssssssssssss
//   </span>
// </div>
//   </div>
  
  
  
  
  )
}

export default Text2;