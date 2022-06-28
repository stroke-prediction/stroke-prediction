import Localbase from 'localbase';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PredictedResults = () => {
    const [data, setData] = useState([]);
    const height = window.innerHeight;

    let db = new Localbase('db');

    const navigate = useNavigate();

    const moveToPredict = () => {
        navigate('/predict-tool')
    }

    const getData = () => {
        db.collection('users').get().then(user => {
            setData(user);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const showResult = (userResult) => {
        navigate('/user', { state: userResult });
    }

    const deleteAll = () => {
        Swal.fire({
            title: 'Do you want to delete all data ?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d33',
            cancelButtonText: 'No',
            cancelButtonColor: '#007E33',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Data ', '', 'success')
            }
        })
    }

    return (
        <div>
            {data.length === 0 ? (<div className="container d-flex align-items-center justify-content-center flex-column" style={{ height: height }} id="noData">
                <h1 className='text-center'>Predicted result is not available!</h1>
                <h4 className='text-center'>Please predict first!</h4>
                <Button variant="primary" className='w-25 mt-4' onClick={moveToPredict}>Predict</Button>
            </div>) : (
                <div className="container pricing-header p-3 pb-md-4 mx-auto text-center" style={{ height: data.length < 7 ? height : null }}>
                    <h2 className="fw-bold text-primary">Predicted Results</h2>
                    <hr />
                    {data.map(user => {
                        return (
                            <button key={user.id} className="fw-bold text-primary list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => showResult(user)}>{user.name}<div className="d-flex justify-content-between align-items-center w-50"><span className="text-secondary">{user.date}</span><FaChevronRight /></div></button>
                        )
                    })
                    }
                    <Button className='btn btn-danger mt-5 w-25' onClick={deleteAll}>Delete All</Button>
                </div>
            )}
        </div>
    )
}

export default PredictedResults