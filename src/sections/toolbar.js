import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Toolbar() {
    return (
      <div style={{"width": "95vw"}}>
          <h3 style={{"textAlign": "right", "margin": "0px", "marginTop": "10px"}}> <FontAwesomeIcon icon={faBars} /></h3>
      </div>
    );
  }
  
  export default Toolbar;