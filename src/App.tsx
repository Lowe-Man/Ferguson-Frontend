import React from 'react';
import './App.css';
import Table from "./components/Table";

function App() {

    const columns: any[] = [{"label": "First Name"}, {"label": "Last Name"}, {"label": "Phone Number"}, {"label": "State Code"}, {"label": "State Name"}];
    const data: any[] = [
        {
            "FirstName": "John",
            "LastName": "Doe",
            "PhoneNumber": "123-456-7890",
            "StateCode": "CA",
            "StateName": "California"
        }
    ]
  return (
    <div className="App">
        <Table columns={columns} data={data}/>
    </div>
  );
}

export default App;
