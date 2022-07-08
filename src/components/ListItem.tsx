import './ListItem.scss';
function ListItem(props: any) {
  return <span className="List-Item">{props.item}</span>;
}
export default ListItem;