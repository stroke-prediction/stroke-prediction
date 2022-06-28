import Localbase from 'localbase';
import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useReactToPrint } from 'react-to-print';

const User = () => {
    const { state } = useLocation(); // once ready it returns the 'window.location' object
    const navigate = useNavigate();
    let db = new Localbase('db');

    const back = () => {
        navigate('/predicted-result');
    }

    const deleteData = (id, name) => {
        Swal.fire({
            title: name + ', Do you want to delete this result ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d33',
            cancelButtonText: 'No',
            cancelButtonColor: '#007E33',
        }).then((result) => {
            if (result.isConfirmed) {
                db.collection('users').doc({ id }).delete().then(() => {
                    Swal.fire('Result has been deleted!', 'success');
                    navigate('/predicted-result');
                });
            }
        })
    }

    const componentRef = useRef();
    const handleDownload = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Predicted Result',
    });

    return (
        <div>
            <center>
                <center ref={componentRef} className="pt-3">
                    <div style={{ width: '75%', padding: 20 }} className='border border-secondary'>
                        <h2 style={{ color: '#9933CC' }}>Predicted Result of Stroke</h2>
                        <h6 className='text-muted'>{state.date}</h6>
                        <hr style={{ marginBottom: 15 }} />
                        <table className="table table-bordered border border-secondary">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{state.name}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{state.age}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{state.gender === '1' ? "Male" : state.gender === '0' ? "Female" : "Other"}</td>
                                </tr>
                                <tr>
                                    <th>Married</th>
                                    <td>{state.married === '1' ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <th>Work Type</th>
                                    <td>{state.work === '0' ? "Government Job" : state.work === '1' ? "Unemployed" : state.work === '2' ? "Private Job" : state.work === '3' ? "Self Employed" : "Children"}</td>
                                </tr>
                                <tr>
                                    <th>Smoking</th>
                                    <td>{state.smoking === '0' ? "Formerly Smoked" : state.smoking === '1' ? "Never Smoked" : state.smoking === '2' ? "Smokes" : "Unknown"}</td>
                                </tr>
                                <tr>
                                    <th>Residence Type</th>
                                    <td>{state.residence === '0' ? "Rural" : "Urban"}</td>
                                </tr>
                                <tr>
                                    <th>Heart Disease</th>
                                    <td>{state.heartDisease === '0' ? "No" : "Yes"}</td>
                                </tr>
                                <tr>
                                    <th>Glucose Level</th>
                                    <td>{state.glucose}</td>
                                </tr>
                                <tr>
                                    <th>BMI</th>
                                    <td>{state.bmi}</td>
                                </tr>
                                <tr>
                                    <th>Hypertension</th>
                                    <td>{state.hypertension === '0' ? "No" : "Yes"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <hr style={{ marginBottom: 15 }} />
                        <h4 style={{ color: 'gray', lineHeight: 0 }}>Predicted Result</h4>
                        <hr style={{ marginBottom: 15 }} />
                        <h4 className='text-dark'>{state.name}, {state.result === "0" ? " don't worry! You don't have any stroke!" : " please consult a doctor immediately! You have stroke!"}</h4>
                        <hr style={{ marginBottom: 15 }} />
                    </div>
                </center>
                <div className="w-75 pt-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn-warning w-50" onClick={back}>Back</button>
                    <button className="btn btn-danger w-50 mx-2" onClick={() => deleteData(state.id, state.name)}>Delete</button>
                    <button className="btn btn-success w-50" onClick={handleDownload}>Download</button>
                </div>
            </center>
        </div>
    )
}

export default User
