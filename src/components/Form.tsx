import './Form.scss';
function Form(props: any) {
    return (
      <form className="Form" onSubmit={props.onSubmit}>
          {props.children}
      </form>
    );
}
export default Form;