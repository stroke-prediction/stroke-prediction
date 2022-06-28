import React from 'react'
import background from '../images/ai.jpg'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { ImYoutube2 } from 'react-icons/im'
import { SiBiolink } from 'react-icons/si'
import Tippy from '@tippyjs/react';
import '../App.css'
import 'tippy.js/dist/tippy.css';
import StudentCard from '../components/StudentCard'

const About = () => {
    // Facebook Link
    const nitishFB = 'https://www.facebook.com/profile.php?id=100009017233862'
    const riktaFB = 'https://www.facebook.com/tasnim.sarreha.581'
    const atiqFB = 'https://www.facebook.com/Atiq372000'
    const marufFB = 'https://www.facebook.com/profile.php?id=100012399033019'
    const mehediFB = 'https://www.facebook.com/mmehedi44'

    // Linkedin Link
    const nitishLinked = 'https://www.linkedin.com/in/nitish-biswas-9298841b6/'
    const riktaLinked = 'https://www.linkedin.com/in/sarreha-tasmin-867948236/'
    const atiqLinked = ''
    const marufLinked = 'https://www.linkedin.com/in/md-maruf-a78981214/'
    const mehediLinked = ''

    // Github Link
    const nitishGithub = 'https://github.com/NITISHBISWAS'
    const riktaGithub = 'https://github.com/sarrehatasmin'
    const atiqGithub = 'https://github.com/atiq-tech'
    const marufGithub = 'https://github.com/marufmon'
    const mehediGithub = ''

    // Profile Link
    const nitishProfile = 'https://students.diu.ac/p/nitishbiswas'
    const riktaProfile = 'https://students.diu.ac/p/sarrehatasminrikta'
    const atiqProfile = 'https://students.diu.ac/p/muhammadatiqurrahmanatiq'
    const marufProfile = 'https://students.diu.ac/p/almarufhossainnasim'
    const mehediProfile = ''



    const goToFacebook = () => {
        window.open('https://www.facebook.com/jilanikhandaker', '_blank');
    }

    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/khandaker-mohammad-mohi-uddin-ba9a60106/', '_blank');
    }

    const goToYoutube = () => {
        window.open('https://www.youtube.com/channel/UCRESCkiwLR966_xme4ZnsZA', '_blank');
    }

    const goToProfile = () => {
        window.open('https://profile.diu.ac/KHANDAKER.MOHAMMAD.MOHI.UDDIN', '_blank');
    }

    return (
        <>
            <div className="d-flex justify-content-center" style={{
                backgroundImage: `url(${background})`, height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

            }}>
                <div className="col-sm col-md-8 m-1 align-self-center">
                    <img src={require('../images/jilani_sir.png')} className="align-self-center mt-2 border border-3 rounded-circle border-info" alt="..." width="250"
                        height="250" />
                    <h4 className="fw-bold text-center text-info mt-2">Khandaker Mohammad Mohi Uddin</h4>
                    <h5 className="text-center" style={{ color: '#b3b1b1' }}>Assistant Professor,</h5>
                    <h5 className=" text-center" style={{ color: '#b3b1b1' }}>Department of CSE</h5>
                    <h5 className=" text-center" style={{ color: '#b3b1b1' }}>Dhaka International University.</h5>
                    <div>
                        <Tippy content="Facebook" className='text-info box'>
                            <span>
                                <AiFillFacebook size={35} onClick={goToFacebook} className='buttonHover mx-4' />
                            </span>
                        </Tippy>
                        <Tippy content="LinkedIn" className='text-info box'>
                            <span>
                                <AiFillLinkedin size={35} onClick={goToLinkedin} className='buttonHover mx-4' />
                            </span>
                        </Tippy>
                        <Tippy content="YouTube" className='text-info box'>
                            <span>
                                <ImYoutube2 size={50} onClick={goToYoutube} className='buttonHover mx-4' />
                            </span>
                        </Tippy>
                        <Tippy content="Profile" className='text-info box'>
                            <span>
                                <SiBiolink size={35} onClick={goToProfile} className='buttonHover mx-4' />
                            </span>
                        </Tippy>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-3 mt-3 mx-5  d-flex justify-content-between">
                    <StudentCard
                        name="Nitish Biswas"
                        img="nitish.png"
                        facebook={nitishFB}
                        linkedin={nitishLinked}
                        github={nitishGithub}
                        profile={nitishProfile}
                    />
                    <StudentCard
                        name="Sarreha Tasmin Rikta"
                        img="rikta.png"
                        facebook={riktaFB}
                        linkedin={riktaLinked}
                        github={riktaGithub}
                        profile={riktaProfile}
                    />
                    <StudentCard
                        name="Muhammad Atiqur Rahman"
                        img="atiq.png"
                        facebook={atiqFB}
                        linkedin={atiqLinked}
                        github={atiqGithub}
                        profile={atiqProfile}
                    />
                </div>
            </div>

            <div className="container  d-flex justify-content-around">
                <div className="row mb-3 mt-3  d-flex justify-content-center">
                    <StudentCard
                        name="Al-Maruf Hossain Nasim"
                        img="maruf.png"
                        facebook={marufFB}
                        linkedin={marufLinked}
                        github={marufGithub}
                        profile={marufProfile}
                    />
                    <StudentCard
                        name="Md. Mehedi Hasan Ullah"
                        img="mehedi.png"
                        facebook={mehediFB}
                        linkedin={mehediLinked}
                        github={mehediGithub}
                        profile={mehediProfile}
                    />
                </div>
            </div>
        </>
    )
}

export default About
