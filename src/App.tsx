import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table";
import {getStudents} from "./services/student";

function App() {
    const [data, setData] = useState([])

    const columns: any[] = [{"label": "First Name"}, {"label": "Last Name"}, {"label": "Phone Number"}, {"label": "State Code"}, {"label": "State Name"}, {"label": "Actions"}];

    useEffect(() => {
        getStudents().then(data => setData(data)).catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <Table columns={columns} data={data}/>
        </div>
    );
}

export default App;
