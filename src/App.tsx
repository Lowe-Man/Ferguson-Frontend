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
import Modal from "./components/Modal";
import Form from "./components/Form";
import FormInput from "./components/FormInput";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function toggleLabel(e: any) {
        if (e.target.value === "") {
            e.target.previousElementSibling.classList.toggle('input-active');
        }
    }

    function getData() {
        getStudents().then(data => {
            setData(data);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        })
        setIsLoading(true);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Header onClick={() => setIsOpen(!isOpen)}/>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="Modal-Container">
                <Form>
                    <FormInput id="firstName" label="First Name" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel}/>
                    <FormInput id="lastName" label="Last Name" type="text" onBlur={toggleLabel} onFocus={toggleLabel}/>
                    <FormInput id="phoneNumber" label="Phone Number" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel}/>
                    <FormInput id="stateCode" label="State Code" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel}/>
                </Form>
            </Modal>
            <div className="Body-Container">
                <ListContainer>
                    <ListHeader onClick={() => getData()}/>
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
