import Tippy from '@tippyjs/react'
import React, { useState, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { FaSearchLocation } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { MdPhoneIphone } from 'react-icons/md'
import { SiBiolink } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const goToFacebook = () => {
        window.open('https://www.facebook.com/profile.php?id=100009017233862', '_blank');
    }

    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/nitish-biswas-9298841b6/', '_blank');
    }

    const goToGithub = () => {
        window.open('https://github.com/NITISHBISWAS', '_blank');
    }

    const goToProfile = () => {
        window.open('https://students.diu.ac/p/nitishbiswas', '_blank');
    }

    const sendMail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_cc0m7fk', 'template_9uazg0r', form.current, '_r1wUpQ-YU6j5O3E7')
            .then(() => {
                setLoading(false);
                Swal.fire({
                    title: 'Success',
                    text: name + ', Your message sent successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                e.target.reset();
            }, (error) => {
                setLoading(false);
                Swal.fire({
                    title: 'Error',
                    text: error.text,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });
    }

    return (
        // Contact us page design
        <div className="container mt-5">
            <div className='row card d-flex flex-row bg-body shadow-lg my-5' style={{ overflow: 'hidden', borderRadius: 20 }}>
                <div className='col-md-6 px-5 py-3'>
                    <h1 className="text-center mb-3">Contact us</h1>
                    <hr />
                    <form ref={form} onSubmit={sendMail}>
                        <div className='row text-start mt-5'>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <label className="form-label fw-bold text-primary">Name</label>
                                    <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <label className="form-label fw-bold text-primary">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                                </div>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md'>
                                <div className='mb-3'>
                                    <label className="form-label fw-bold text-primary">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                                </div>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md'>
                                <div className='mb-3'>
                                    <label className="form-label fw-bold text-primary">Message</label>
                                    <textarea rows="3" type="text" className="form-control" id="message" name="message" placeholder="Write here your message..." required />
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md'>
                                <Button type='submit' className='btn-primary' style={{ width: '100%' }}>{loading ? "Sending..." : "Send message"}</Button>
                            </div>
                        </div>
                    </form>

                </div>

                <div className='col-md-6 px-5 py-3 bg-dark'>
                    <h1 className="text-center mb-3 text-light">Let's get in touch !</h1>
                    <hr className='bg-light' />
                    <p className='text-muted mb-2 mt-3'>
                        Stroke Predictions as a Service will allow you to make accurate ML-based predictions for predict your stroke risk.
                    </p>

                    {/* Address */}
                    <div className='text-start mt-4 d-flex flex-row align-items-center'>
                        <FaSearchLocation color='white' size={30} />
                        <h6 className='text-light mx-4'>66 Green Rd, Dhaka 1205</h6>
                    </div>

                    <div className='text-start mt-4 d-flex flex-row align-items-center'>
                        <FiMail color='white' size={30} />
                        <h6 className='text-light mx-4'>strokepredictionmachine@gmail.com</h6>
                    </div>

                    <div className='text-start mt-4 d-flex flex-row align-items-center'>
                        <MdPhoneIphone color='white' size={30} />
                        <h6 className='text-light mx-4'>01758989701</h6>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <iframe className='bg-body shadow-lg rounded overflow' title='Dhaka International University' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.996814692932!2d90.38617976054408!3d23.75053353351574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb2df15243%3A0xc11ceb1a3bffa8ec!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1653817339567!5m2!1sen!2sbd" allowFullScreen="" frameBorder="0" width="100%" height="200" style={{ border: 0 }} aria-hidden="false" tabIndex="0"></iframe>
                    </div>

                    <div className='mt-3'>
                        <div className='mt-3 d-flex justify-content-around'>
                            <Tippy content="Facebook" className='text-white box'>
                                <span>
                                    <AiFillFacebook color='white' size={35} onClick={goToFacebook} className='studentButtonHover' />
                                </span>
                            </Tippy>
                            <Tippy content="LinkedIn" className='text-white box'>
                                <span>
                                    <AiFillLinkedin color='white' size={35} onClick={goToLinkedin} className='studentButtonHover' />
                                </span>
                            </Tippy>
                            <Tippy content="GitHub" className='text-white box'>
                                <span>
                                    <VscGithub color='white' size={30} onClick={goToGithub} className='studentButtonHover' />
                                </span>
                            </Tippy>
                            <Tippy content="Profile" className='text-white box'>
                                <span>
                                    <SiBiolink color='white' size={30} onClick={goToProfile} className='studentButtonHover' />
                                </span>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
