import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import ListContainer from "./components/ListContainer";
import ListBody from "./components/ListBody";
import ListRow from "./components/ListRow";
import {getStudents} from "./services/student";


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getStudents().then(data => {
            setData(data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="Body-Container">
                <ListContainer>
                    <ListHeader />
                    <ListBody>
                        {
                            data.map((item, index) => {
                                return (
                                    ListRow({data: item})
                                )
                            })
                        }
                    </ListBody>
                </ListContainer>
            </div>
        </div>
    );
}

export default App;
