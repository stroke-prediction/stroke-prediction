import Tippy from '@tippyjs/react'
import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { SiBiolink } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import Swal from 'sweetalert2'

const StudentCard = ({ name, img, facebook, linkedin, github, profile }) => {

    const goToFacebook = () => {
        if (facebook === '') {
            Swal.fire({
                title: 'Sorry!',
                text: 'This student has not provided his/her Facebook profile link.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } else {
            window.open(facebook, '_blank');
        }
    }

    const goToLinkedin = () => {
        if (linkedin === '') {
            Swal.fire({
                title: 'Sorry!',
                text: 'This student has not provided his/her Linkedin profile link.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } else {
            window.open(linkedin, '_blank');
        }
    }

    const goToGithub = () => {
        if (github === '') {
            Swal.fire({
                title: 'Sorry!',
                text: 'This student has not provided his/her Github profile link.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } else {
            window.open(github, '_blank');
        }
    }

    const goToProfile = () => {
        if (profile === '') {
            Swal.fire({
                title: 'Sorry!',
                text: 'This student has not provided his/her profile link.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } else {
            window.open(profile, '_blank');
        }
    }

    return (
        <div className="card col-sm-12 col-md mb-5 shadow-lg m-3 bg-body rounded">
            <img src={require(`../images/${img}`)} className="align-self-center mt-2 border border-3 rounded-circle border-info" alt="..." width="200" height="200" />
            <div className="card-body">
                <h6 className="fw-bold text-center text-info">{name}</h6>
                <h6 className="text-center" style={{ color: '#b3b1b1' }}>Student,</h6>
                <h6 className="text-center" style={{ color: '#b3b1b1' }}>Department of CSE</h6>
                <h6 className="text-center" style={{ color: '#b3b1b1' }}>Dhaka International University.</h6>
                <div className='mt-3 d-flex justify-content-around'>
                    <Tippy content="Facebook" className='text-white box'>
                        <span>
                            <AiFillFacebook color='#4267B2' size={35} onClick={goToFacebook} className='studentButtonHover' />
                        </span>
                    </Tippy>
                    <Tippy content="LinkedIn" className='text-white box'>
                        <span>
                            <AiFillLinkedin color='#0A66C2' size={35} onClick={goToLinkedin} className='studentButtonHover' />
                        </span>
                    </Tippy>
                    <Tippy content="GitHub" className='text-white box'>
                        <span>
                            <VscGithub color='#9370db' size={30} onClick={goToGithub} className='studentButtonHover' />
                        </span>
                    </Tippy>
                    <Tippy content="Profile" className='text-white box'>
                        <span>
                            <SiBiolink color='#6495ED' size={30} onClick={goToProfile} className='studentButtonHover' />
                        </span>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}

export default StudentCard
