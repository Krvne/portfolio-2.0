import React from 'react'
import '../../css/home.css'

const Home = () => {
    const me = require('../images/me-bw.png')
    const logo = require('../images/logo.png')
    const contactButtonText = 'Contact Me >'
    const learnButtonText = 'Learn More >'

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
                                <div className='box-text-center top-padding'>
                                    <h2>Hi, I’m Lachlan!</h2>
                                    <h1>I design responsive front end web apps and user interfaces.</h1>
                                    <p>An Australian information systems student with a passion for UX/UI design and business process management.</p>
                                </div>
                                <div className='learn-button'>
                                    <a href='/about'><button>{learnButtonText}</button></a>
                                </div>
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

export default Home
