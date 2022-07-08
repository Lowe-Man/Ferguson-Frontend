import './ListContainer.scss';

function ListContainer(props: any) {
    return (
        <div className="List-Container">
            {props.children}
        </div>
    );
}

export default ListContainer;