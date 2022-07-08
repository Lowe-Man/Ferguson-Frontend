import React from 'react';
import './App.scss';
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import ListContainer from "./components/ListContainer";
import ListBody from "./components/ListBody";
import ListRow from "./components/ListRow";


function App() {
    return (
        <div className="App">
            <Header />
            <div className="Body-Container">
                <ListContainer>
                    <ListHeader />
                    <ListBody>
                        <ListRow />
                        <ListRow />
                    </ListBody>
                </ListContainer>
            </div>
        </div>
    );
}

export default App;
