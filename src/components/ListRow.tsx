import './ListRow.scss';
import ListItem from "./ListItem";

function ListRow() {
    return (
        <div className="List-Row">
            <div className="Item-Container">
                <ListItem item="First Name"/>
                <ListItem item="Last Name"/>
                <ListItem item="Phone Number"/>
                <ListItem item="State Code"/>
                <ListItem item="State Name"/>
            </div>
            <button type="button">View</button>
        </div>
    );
}

export default ListRow;