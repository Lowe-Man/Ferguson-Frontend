import './ListBody.scss';

function ListBody(props: any) {
    return (
        <ul className="List-Body">
            {props.children}
        </ul>
    );
}

export default ListBody;