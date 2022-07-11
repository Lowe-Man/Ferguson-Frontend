import './FormInput.scss';

function FormInput(props: any) {
    let fieldProps = {
        type: props.type,
        disabled: props.disabled,
        onChange: props.onChange,
        readOnly: props.readOnly,
        hasError: props.hasError
    }

    if (props.onChange || props.readOnly) {
        // @ts-ignore
        fieldProps.value = props.value;
    }

    
    return (
        <div className="Form-Input" onBlur={props.onBlur} onFocus={props.onFocus}>
            {props.readOnly ? <label htmlFor={props.id} className="input-active">{props.label}</label> : <label htmlFor={props.id}>{props.label}</label>}
            <input {...fieldProps} id={props.id} name={props.id} />
            {fieldProps.hasError && <span className="form-error">{fieldProps.hasError}</span>}
        </div>
    );
}

export default FormInput;