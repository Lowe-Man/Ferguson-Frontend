import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <>
            <div className="Header-Accent"></div>
            <div className="Header">
                <FontAwesomeIcon icon={faCirclePlus} className="Add-Button"/>
            </div>
        </>
    );
}

export default Header;