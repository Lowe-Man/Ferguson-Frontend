import {createElement} from "react";

function Table(props: any) {
    // @ts-ignore
    // @ts-ignore
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
                props.data.map((row: any, index: number) => {
                    return createElement("tr", {className: "Test"}, Object.keys(row).map((key: string) => {
                        return createElement("td", {className: "Test"}, row[key]);
                    }));
                })}
            </tbody>
        </table>
    );
}

export default Table;