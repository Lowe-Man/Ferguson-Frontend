import './ListRow.scss';
import ListItem from "./ListItem";
import Button from "./Button";

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
            <Button type="button" className="Button Button-View" onClick={props.onClick}>View</Button>
        </div>
    );
}

export default ListRow;