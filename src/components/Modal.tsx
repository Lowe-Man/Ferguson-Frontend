import './Modal.scss';
import ReactDom from 'react-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
function Modal(props: any) {
    if (!props.isOpen) return null;
    return ReactDom.createPortal(
        <>
            <div className="Modal-Overlay" onClick={props.onClose}></div>
            <div className={props.className}>
                <FontAwesomeIcon icon={faXmark} className="Modal-Close-Icon" onClick={props.onClose} />
                {props.children}
            </div>
        </>, document.getElementById('react-modal-root')!)
}

export default Modal