import React from 'react'
import '../../css/about.css'

const About = () => {
    const me = require('../images/me-bw.png')
    const logo = require('../images/logo.png')
    const qutLogo = require('../images/qut-logo-og-1200.jpg')
    const colage = require('../images/colage.png')
    const contactButtonText = 'Contact Me >'


    return (
        <>
            <main className='page-container'>
                <div className='box-container'>
                    <div className='box b-gray'>
                        <div className='info-container'>
                            <div className='center-padding center-image'>
                                <img className='me' src={me.default} alt='' />
                            </div>
                            <div>
                                <div className='box-text-center top-padding not-bold'>
                                    <h1>My name’s Lachlan Buchanan.</h1>
                                    <h2>I’m a 20 year old student that loves all things technology.</h2>
                                    <h2>I enjoy building and repairing computers; 3D modelling and 3D printing; and lets not forget, video games. But most importantly, I have a passion for UX/UI design.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='box-container'>
                    <div className='box b-green'>
                        <div id='hide-mobile' className='info-container'>
                            <div className='text-right right-padding'>
                                <div className='not-bold'>
                                    <h2 className='text-black'>
                                        I am profficient in programming languages such as Python, HTML, CSS and have recently started increasing my proficiency of Java.
                                    </h2>
                                    <h2 className='text-black'>
                                        Specifically React.js which is the javascript library this website is built with.
                                    </h2>
                                    <h2 className='text-black'>
                                        These languages all pair well to design quality responsive front end web applications.
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <img className='colage' src={colage.default} alt='' />
                            </div>
                        </div>
                        <div id='show-mobile' className='info-container'>
                            <div>
                                <img className='colage' src={colage.default} alt='' />
                            </div>
                            <div className='left-padding center-padding'>
                                <div className='info-centered box-text-center not-bold'>
                                    <h2 className='text-black'>
                                        I am profficient in programming languages such as Python, HTML, CSS and have recently started increasing my proficiency of Java.
                                    </h2>
                                    <h2 className='text-black'>
                                        Specifically React.js which is the javascript library this website is built with.
                                    </h2>
                                    <h2 className='text-black'>
                                        These languages all pair well to design quality responsive front end web applications.
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='box-container'>
                    <div className='box b-gray'>
                        <div className='info-container'>
                            <div className='center-padding center-image'>
                                <img className='qut-logo' src={qutLogo.default} alt='' />
                            </div>
                            <div className='box-text-center top-padding not-bold'>
                                <h2>
                                    I’m studying at the Queensland University of Technology in Brisbane, Australia.
                                </h2>
                                <h2>
                                    My degree is a Bachelor of Information Technology, majoring in Information Systems and minoring in Business Process Management.
                                </h2>
                                <h2>
                                    I hope to one day become a Web User Interface Designer or a systems administrator!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='box-container'>
                    <div className='box b-blue'>
                        <div id='hide-mobile' className='info-container'>
                            <div className='left-padding center-padding'>
                                <div className='info-centered box-text-center'>
                                    <h1>Interested in having a chat?</h1>
                                </div>
                                <div className='info-centered'>
                                    <a href='/contact'><button>{contactButtonText}</button></a>
                                </div>
                            </div>
                            <div>
                                <img className='logo' src={logo.default} alt='' />
                            </div>
                        </div>
                        <div id='show-mobile' className='info-container'>
                            <div>
                                <img className='logo' src={logo.default} alt='' />
                            </div>
                            <div className='left-padding center-padding'>
                                <div className='info-centered box-text-center'>
                                    <h1>Interested in having a chat?</h1>
                                </div>
                                <div className='info-centered'>
                                    <a href='/contact'><button>{contactButtonText}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default About
