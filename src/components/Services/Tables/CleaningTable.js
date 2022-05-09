

function CleaningTable(){
  return(<>
  
  <h4 className='servicesHeader'>Czyszczenie</h4>
  <table className="table table-striped table-dark table-bordered">
  <thead>
    <tr>
      <th scope="col">Usługa</th>
      <th scope="col">Koszt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Czyszczenie samochodu na zewnątrz</th>
      <td>50zł</td>
    </tr>
    <tr>
      <th scope="row">Czyszczenie samochodu wewnątrz </th>
      <td>60zł</td>
    </tr>
    <tr>
      <th scope="row">Czyszczenie samochodu wewnątrz oraz na zewnątrz</th>
      <td>90zł</td>
    </tr>
    <tr>
      <th scope="row">Czyszczenie tapicerki skórzanej</th>
      <td>od 170zł</td>
    </tr>
    <tr>
      <th scope="row">Pranie wszystkich tkanin</th>
      <td>od 450zł</td>
    </tr>
    <tr>
      <th scope="row">Pranie foteli i kanapy</th>
      <td>od 250zł</td>
    </tr>
    <tr>
      <th scope="row">Renowacja tapicerki skórzanej</th>
      <td>Wycena po oględzinach tapicerki</td>
    </tr>
  </tbody>
</table>

  </>)
}

export default CleaningTable;