import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";

function Header(props: any) {
    return (
        <>
            <div className="Header-Accent"></div>
            <div className="Header">
                <img className="logo" src="https://www.ferguson.com/wwwstatic/css/ferguson/common/ferguson-logo-white-new.svg" alt="Site Logo"/>
                <FontAwesomeIcon icon={faCirclePlus} className="Add-Button" onClick={props.onClick} />
            </div>
        </>
    );
}

export default Header;