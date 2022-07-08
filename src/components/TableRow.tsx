function TableRow(props: any) {
    return (
        <tr>
            <td>{props.row.FirstName}</td>
            <td>{props.row.LastName}</td>
            <td>{props.row.PhoneNumber}</td>
            <td>{props.row.StateCode}</td>
            <td>{props.row.StateName}</td>
            <td>{props.children}</td>
        </tr>

    );
}

export default TableRow;