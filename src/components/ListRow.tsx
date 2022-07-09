import './ListRow.scss';
import ListItem from "./ListItem";

function ListRow(props: any) {
    return (
        <div className="List-Row">
            <div className="Item-Container">
                <ListItem item={props.data.FirstName}/>
                <ListItem item={props.data.LastName}/>
                <ListItem item={props.data.PhoneNumber}/>
                <ListItem item={props.data.StateCode}/>
                <ListItem item={props.data.StateName}/>
            </div>
            <button type="button" onClick={props.onClick}>View</button>
        </div>
    );
}

export default ListRow;