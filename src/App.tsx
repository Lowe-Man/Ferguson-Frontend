import React from 'react';
import './App.scss';
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Body-Container">
                <ListHeader></ListHeader>
            </div>
        </div>
    );
}

export default App;
