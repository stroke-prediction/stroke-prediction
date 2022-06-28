import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Home = () => {
    const navigate = useNavigate();

    const moveToPredict = () => {
        navigate('/predict-tool')
    }

    var alerted = localStorage.getItem('alerted') || '';
    if (alerted !== 'yes') {
        Swal.fire({
            title: 'Stroke Prediction',
            text: 'Welcome to the Stroke Prediction Tool!',
            imageUrl: 'https://res.cloudinary.com/nitishbiswas/image/upload/v1654021190/doctor2_kzynpi.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Stroke Prediction Image',
        })
        localStorage.setItem('alerted', 'yes');
    }

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/image3.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Stroke prediction</h3>
                        <p>In this project our top priority is to predict patient have stroke or not.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/image2.jpg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Stroke prediction</h3>
                        <p>In this project our top priority is to predict patient have stroke or not.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/image.jpg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Stroke prediction</h3>
                        <p>In this project our top priority is to predict patient have stroke or not.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container">
                <div className="row mb-3 mt-3">
                    <div className="col-sm-12 col-md align-self-center">
                        <h4 className="fw-bold text-primary">What is Stroke ?</h4>
                        <p className="text-justify">A stroke is a serious life-threatening medical condition that happens when
                            the blood supply to part of the brain is cut
                            off. Strokes are a medical emergency and urgent treatment is essential. The sooner a person
                            receives treatment for a
                            stroke, the less damage is likely to happen.</p>
                        <div className="text-center">
                            <Button variant="primary" className='w-50' onClick={moveToPredict}>Predict</Button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md align-self-center">
                        <img src={require('../images/banner.png')} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-3 mt-3">
                    <div className="card col-sm-12 col-md mb-5 shadow-lg m-3 bg-body rounded">
                        <img src={require('../images/predict.png')} className="align-self-center mt-2" alt="..." width="200" height="200" />
                        <div className="card-body">
                            <h4 className="fw-bold text-center text-primary">What is prediction and how is it achieved?</h4>
                            <p className="card-text  text-center">“Prediction” refers to the output of an algorithm after it has
                                been trained on
                                a historical dataset and applied to new
                                data when forecasting the likelihood of a particular outcome.</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md mb-5 shadow-lg m-3 bg-body rounded">
                        <img src={require('../images/group.png')} className="align-self-center mt-2" alt="..." width="200" height="200" />
                        <div className="card-body">
                            <h4 className="fw-bold text-center text-primary">Who is Predict for?</h4>
                            <p className="card-text text-center">Predict is for clinicians, patients and their families.<br /><br />

                                <b>Patients should use it in consultation with a medical professional.</b>
                            </p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-md mb-5 shadow-lg m-3 bg-body rounded">
                        <img src={require('../images/stroke.png')} className="align-self-center mt-2" alt="..." width="200" height="200" />
                        <div className="card-body">
                            <h4 className="fw-bold text-center text-primary">Can a person have a stroke and not know it?</h4>
                            <p className="card-text">Some people have strokes without realizing it. They're called silent strokes,
                                and they either have no easy-to-recognize
                                symptoms, or you don't remember them.
                                <b>But they can predict stroke from this machine.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
