import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white mt-3">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="p-3 text-center col-sm">
                            <img src={require('../images/doctor2.png')} className="" alt="..." />
                            <h2>Stroke Prediction</h2>
                        </div>
                        <div className="p-3 text-center col-sm">
                            <img src={require('../images/diu.png')} className="" alt="..." />
                            <h4>Dhaka International University</h4>
                        </div>
                        <div className="p-3 text-center col-sm">
                            <img src={require('../images/who.png')} className="" alt="..." />
                            <h4>World Health Organization</h4>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bg-light d-flex justify-content-center pt-3">
                <p className="text-center">
                    Copyright Ⓒ 2022 Dhaka International University. All Rights Reserved | Privacy & Data Protection |
                    Disclaimer
                </p>
            </footer>
        </div>
    )
}

export default Footer
