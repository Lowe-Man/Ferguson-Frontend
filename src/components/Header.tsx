import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

function Header(props: any) {
    return (
        <>
            <div className="Header-Accent"></div>
            <div className="Header">
                <FontAwesomeIcon icon={faCirclePlus} className="Add-Button" onClick={props.onClick} />
            </div>
        </>
    );
}

export default Header;