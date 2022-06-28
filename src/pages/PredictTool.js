import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import Localbase from 'localbase'
import { uid } from 'uid';

const PredictTool = () => {
    const [loading, setLoading] = useState(false);
    let db = new Localbase('db');

    const storeData = (data) => {
        db.collection('users').add({
            id: uid(),
            name: data.name,
            gender: data.gender,
            age: data.age,
            hypertension: data.hypertension,
            heartDisease: data.heartDisease,
            married: data.maritalStatus,
            work: data.workType,
            residence: data.residenceType,
            glucose: data.glucose,
            bmi: data.bmi,
            smoking: data.smoking,
            date: data.date,
            result: data.result
        })
    }



    const predictResults = () => {
        var name = document.getElementById('name').value;
        var gender = document.getElementById('gender').value;
        var age = document.getElementById('age').value;
        var hypertension = document.getElementById('hypertension').value;
        var heartDisease = document.getElementById('disease').value;
        var married = document.getElementById('married').value;
        var work = document.getElementById('work').value;
        var residence = document.getElementById('residence').value;
        var glucose = document.getElementById('glucose').value;
        var bmi = document.getElementById('bmi').value;
        var smoking = document.getElementById('smoking').value;

        if (name !== "" && gender !== "" && age !== "" && hypertension !== "" && heartDisease !== "" && married !== "" && work !== "" && residence !== "" && glucose !== "" && bmi !== "" && smoking !== "") {
            setLoading(true);
            let formData = new FormData();
            formData.append('gender', gender);
            formData.append('age', age);
            formData.append('hypertension', hypertension);
            formData.append('heart_disease', heartDisease);
            formData.append('married', married);
            formData.append('work', work);
            formData.append('residence', residence);
            formData.append('glucose', glucose);
            formData.append('bmi', bmi);
            formData.append('smoking', smoking);
            fetch(process.env.REACT_APP_URL, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(res => {
                    setLoading(false);
                    //current date and time
                    let date = new Date().toLocaleString();

                    // send data to local storage

                    const data = {
                        age: age,
                        glucose: glucose,
                        bmi: bmi,
                        name: name,
                        gender: gender,
                        hypertension: hypertension,
                        heartDisease: heartDisease,
                        maritalStatus: married,
                        workType: work,
                        residenceType: residence,
                        smoking: smoking,
                        result: res.prediction,
                        date: date
                    }

                    storeData(data);

                    document.getElementById('age').value = "";
                    document.getElementById('glucose').value = "";
                    document.getElementById('bmi').value = "";
                    document.getElementById('gender').value = "";
                    document.getElementById('hypertension').value = "";
                    document.getElementById('disease').value = "";
                    document.getElementById('married').value = "";
                    document.getElementById('work').value = "";
                    document.getElementById('residence').value = "";
                    document.getElementById('smoking').value = "";

                    if (res.prediction === '1') {
                        Swal.fire({
                            title: name,
                            text: "Please consult a doctor immediately! You have stroke!",
                            icon: 'warning',
                            confirmButtonText: 'OK'
                        })
                    } else {
                        Swal.fire({
                            title: name,
                            text: "Don't worry! You don't have any stroke!",
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    }
                    document.getElementById('name').value = "";
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Information Missing',
                text: 'Please fill all the fields!',
            })
        }
    }

    return (
        <div>
            <div id="predict" className="container">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h2 className="fw-bold text-primary">Fill this form to predict stroke</h2>
                    <hr />
                </div>
                <div className="container card bg-body shadow-lg rounded pt-3 pb-3 mb-5 text-start">
                    <div className="row">
                        <div className="col-sm">
                            <div className="mb-3">
                                <label className="form-label text-left fw-bold text-primary">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Gender</label>
                                <select className="form-select" id="gender" name="gender" aria-label="Default select example"
                                    required>
                                    <option value="">-- select gender --</option>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                    <option value="2">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Enter Age</label>
                                <input type="text" className="form-control" id="age" name="age" placeholder="Age" required />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label fw-bold text-primary">Hypertension</label>
                                <select className="form-select" id="hypertension" name="hypertension"
                                    aria-label="Default select example" required>
                                    <option value="" >-- select Hypertension --</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Heart
                                    Disease</label>
                                <select className="form-select" id="disease" name="heart_disease"
                                    aria-label="Default select example" required>
                                    <option value="" >-- select Heart Disease --</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Marital
                                    Status</label>
                                <select className="form-select" id="married" name="married" aria-label="Default select example"
                                    required>
                                    <option value="" >--select marital status --</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Work Type</label>
                                <select className="form-select" id="work" name="work" aria-label="Default select example"
                                    required>
                                    <option value="" >-- select work type --</option>
                                    <option value="3">Self-employed</option>
                                    <option value="2">Private</option>
                                    <option value="4">children</option>
                                    <option value="0">Government Job</option>
                                    <option value="1">Never_worked</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Residence
                                    Type</label>
                                <select className="form-select" id="residence" name="residence"
                                    aria-label="Default select example" required>
                                    <option value="" >-- Select residence type --</option>
                                    <option value="1">Urban</option>
                                    <option value="0">Rural</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Enter Average
                                    Glucose Level</label>
                                <input type="text" className="form-control" id="glucose" name="glucose"
                                    placeholder="Average Glucose level" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Enter Body Mass
                                    Index (BMI)</label>
                                <input type="text" className="form-control" id="bmi" name="bmi"
                                    placeholder="Body Mass Index (BMI)" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-primary">Smoking
                                    Status</label>
                                <select className="form-select" id="smoking" name="smoking" aria-label="Default select example"
                                    required>
                                    <option value="">-- Select smoking status if unknown --</option>
                                    <option value="1">never smoked</option>
                                    <option value="0">formerly smoked</option>
                                    <option value="2">smokes</option>
                                    <option value="3">unknown</option>
                                </select>
                            </div>
                            <div className='text-center'>
                                <Button className="btn btn-primary w-75 mt-4" onClick={predictResults}>{loading === true ? "Please wait..." : "Predict Result"}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictTool
