import './Button.scss';
function Button(props: any) {
    if (props.type === 'submit') {
        return (
            <button className="Button Button-Submit" type="submit">
                {props.children}
            </button>
        );
    } else {
        return (
            <button className="Button" type="button">
                {props.children}
            </button>
        );
    }
}
export default Button;