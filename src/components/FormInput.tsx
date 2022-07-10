import './FormInput.scss';

function FormInput(props: any) {
    return (
        <div className="Form-Input" onBlur={props.onBlur} onFocus={props.onFocus}>
            {
                props.readOnly ? <>
                    <label htmlFor={props.id} className="input-active">{props.label}</label>
                    <input type={props.type} id={props.id} name={props.id} value={props.value} readOnly />
                </> : <>
                    <label htmlFor={props.id}>{props.label}</label>
                    <input type={props.type} id={props.id} name={props.id} readOnly />
                </>
            }
        </div>
    );
}

export default FormInput;