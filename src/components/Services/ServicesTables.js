import '../../styles/Services.css'; // CSS
import { Link } from "react-router-dom"; //Link
//Tables
import CleaningTable from './Tables/CleaningTable';
import DetailingOutsideTable from './Tables/DetailingOutsideTable';
import FilmProtectionTable from './Tables/FilmProtectionTable';
import ProtectionInsideTable from './Tables/ProtectionInsideTable';
import ProtectionOutsideTable from './Tables/ProtectionOutsideTable';
//Tables

function ServicesTable(){
  return(<>
<h3>W ramach świadczonych przez nas usług oferujemy:</h3>
<CleaningTable/>
<DetailingOutsideTable/>
<ProtectionOutsideTable/>
<ProtectionInsideTable/>
<FilmProtectionTable/>
<h3>W razie jakichkolwiek wątpliwości zachęcamy do <Link to="/contact"><u>kontaktu</u></Link>.</h3>
</>);
}

export default ServicesTable;