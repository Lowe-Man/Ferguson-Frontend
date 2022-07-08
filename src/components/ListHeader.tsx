import './ListHeader.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons";
function ListHeader(props: any) {
    return (
        <div className="List-Header">
            <div className="Label-Container">
                <span>First Name</span>
                <span>Last Name</span>
                <span>Phone Number</span>
                <span>State Code</span>
                <span>State Name</span>
            </div>
            <FontAwesomeIcon icon={faRotate} className="Refresh-Button" onClick={props.onClick}/>
        </div>
    );
}

export default ListHeader;