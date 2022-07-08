import {createElement} from "react";
import TableRow from "./TableRow";

function Table(props: any) {
    return (
        <table>
            <thead>
            <tr>
                {
                    props.columns.map((column: any, index: number) => {
                        return createElement("th", {className: "Test"}, column.label);
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((row: any, index: number) =>
                    createElement(TableRow, {row: row, index: index},
                        <>
                            <a href="#">Edit</a>
                            <a href="#">Edit</a>
                        </>
                    )
                )
            }
            </tbody>
        </table>
    );
}

export default Table;