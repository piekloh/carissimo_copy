

function DetailingOutsideTable(){
  return(<>
  
  <h4 className='servicesHeader'>Detailing nadwozia</h4>

<table className="table table-striped table-dark table-bordered">
  <thead>
    <tr>
      <th scope="col">Usługa</th>
      <th scope="col">Koszt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Polerowanie lakieru</th>
      <td>od 600zł</td>
    </tr>
    <tr>
      <th scope="row">Pełna korekta lakieru</th>
      <td>od 1650zł</td>
    </tr>
    <tr>
      <th scope="row">Polerowanie lamp i reflektorów</th>
      <td>od 70zł/sztuka</td>
    </tr>
    <tr>
      <th scope="row">Wgniotki</th>
      <td>Wycena po oględzinach</td>
    </tr>
  </tbody>
</table>

  </>)
}

export default DetailingOutsideTable;