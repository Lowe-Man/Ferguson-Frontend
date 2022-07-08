import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import ListContainer from "./components/ListContainer";
import ListBody from "./components/ListBody";
import ListRow from "./components/ListRow";
import {getStudents} from "./services/student";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStudents().then(data => {
            setData(data);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        })
    }, []);

    return (
        <div className="App">
            <Header/>
            <div className="Body-Container">
                <ListContainer>
                    <ListHeader/>
                    <ListBody>
                        <>
                            {isLoading ? <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse Loading-Icon"/> :
                                data.map(item => {
                                    return (
                                        ListRow({data: item})
                                    )
                                })
                            }
                        </>
                    </ListBody>
                </ListContainer>
            </div>
        </div>
    );
}

export default App;
