import './FormInput.scss';

function FormInput(props: any) {
    return (
        <div className="Form-Input" onBlur={props.onBlur} onFocus={props.onFocus}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} />
        </div>
    );
}

export default FormInput;