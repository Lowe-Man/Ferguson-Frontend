import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header";
import ListHeader from "./components/ListHeader";
import ListContainer from "./components/ListContainer";
import ListBody from "./components/ListBody";
import ListRow from "./components/ListRow";
import {createStudent, getStudent, getStudents} from "./services/student";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import Modal from "./components/Modal";
import Form from "./components/Form";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import Student from "./classes/Student";
import useForm from "./hooks/useForm";
import StudentRequest from "./interfaces/StudentRequest";


function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [singleStudent, setSingleStudent] = useState<Student[]>([]);
    const [studentLoaded, setStudentLoaded] = useState(false);
    const {handleSubmit, handleChange, data: student, errors} = useForm<StudentRequest>({
        validations: {
            FirstName: {
                pattern: {
                    value: /^[a-zA-Z ,.'-]+$/gm,
                    message: 'First name must be alphabetic'
                }
            },
            LastName: {
                pattern: {
                    value: /^[a-zA-Z ,.'-]+$/gm,
                    message: 'Last name must be alphabetic'
                }
            },
            PhoneNumber: {
                pattern: {
                    value: /^(\([0-9]{3}\)\s[0-9]{3}-[0-9]{4})$/gm,
                    message: 'Please enter a valid phone number as (###) ###-####'
                }
            },
            StateCode: {
                pattern: {
                    value: /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/gm,
                    message: 'Please enter a valid state code'
                }
            }
        },
        onSubmit: () => {
            student.PhoneNumber = student.PhoneNumber.replace(/\(|\)|\s|-/g, '');
            createStudent(student).then(() => {
                getData();
                setIsAddModalOpen(false);
            }).catch((err: Error) => {
                console.log(err);
            })
        }
    });

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
            <Header onClick={() => setIsAddModalOpen(!isAddModalOpen)}/>
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} className="Modal-Container"
                   elementId="add-item-modal">
                <Form onSubmit={handleSubmit}>
                    <FormInput id="firstName" label="First Name" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel} onChange={handleChange("FirstName")}/>
                    {errors.FirstName && <p className="error">{errors.FirstName}</p>}
                    <FormInput id="lastName" label="Last Name" type="text" onBlur={toggleLabel} onFocus={toggleLabel} onChange={handleChange("LastName")}/>
                    {errors.LastName && <p className="error">{errors.LastName}</p>}
                    <FormInput id="phoneNumber" label="Phone Number" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel} onChange={handleChange("PhoneNumber")}/>
                    {errors.PhoneNumber && <p className="error">{errors.PhoneNumber}</p>}
                    <FormInput id="stateCode" label="State Code" type="text" onBlur={toggleLabel}
                               onFocus={toggleLabel} onChange={handleChange("StateCode")}/>
                    {errors.StateCode && <p className="error">{errors.StateCode}</p>}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal>
            <Modal isOpen={isViewModalOpen} onClose={() => {
                setIsViewModalOpen(false)
            }} className="Modal-Container" elementId="view-item-modal">
                {
                    studentLoaded ? <Form>
                        <FormInput id="firstName" label="First Name" type="text" readOnly
                                   value={singleStudent[0].FirstName}/>
                        <FormInput id="firstName" label="First Name" type="text" readOnly
                                   value={singleStudent[0].LastName}/>
                        <FormInput id="firstName" label="First Name" type="text" readOnly
                                   value={singleStudent[0].PhoneNumber}/>
                        <FormInput id="firstName" label="First Name" type="text" readOnly
                                   value={singleStudent[0].StateCode}/>
                        <FormInput id="firstName" label="First Name" type="text" readOnly
                                   value={singleStudent[0].StateName}/>
                    </Form> : <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse Loading-Icon"/>
                }
            </Modal>
            <div className="Body-Container">
                <ListContainer>
                    <ListHeader onClick={() => getData()}/>
                    <ListBody>
                        <>
                            {isLoading ? <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse Loading-Icon"/> :
                                data.map(item => {
                                    return (
                                        ListRow({
                                            data: item, onClick: (e: any) => {
                                                setIsViewModalOpen(!isViewModalOpen);
                                                const index = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
                                                const rowId = data[index]["_id"];
                                                getStudent(rowId).then(data => {
                                                    setSingleStudent(data);
                                                    setStudentLoaded(true);
                                                }).catch(err => {
                                                    console.log(err);
                                                })
                                                setStudentLoaded(false);
                                            }
                                        })
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
