import './Button.scss';
function Button(props: any) {
    if (props.type === 'submit') {
        return (
            <button className="Button Button-Submit" type="submit" onClick={props.onClick}>
                {props.children}
            </button>
        );
    } else {
        return (
            <button className={props.className} onClick={props.onClick} type="button">
                {props.children}
            </button>
        );
    }
}
export default Button;