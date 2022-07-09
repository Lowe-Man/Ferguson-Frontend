import './FormInput.scss';

function FormInput(props: any) {
    return (
        <div className="Form-Input" onBlur={props.onBlur} onFocus={props.onFocus}>
            {props.readOnly ? <label htmlFor={props.id} className="input-active">{props.label}</label> : <input id={props.id} type={props.type}/>}
            {props.readOnly ? <input type={props.type} id={props.id} name={props.id} value={props.value} readOnly /> : <input type={props.type} id={props.id} name={props.id} value={props.value}/>}
        </div>
    );
}

export default FormInput;