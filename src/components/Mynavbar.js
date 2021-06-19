import React from 'react'
import '../css/mynavbar.css'

const Mynavbar = () => {
    var logo = require('./images/logo.png')
    const currentPage = window.location.pathname
    const hamburger = require('./images/hamburger.png')

    // const ham = document.getElementById('hamburger')
    // const navUl = document.getElementById('nav-ul')

    // ham.addEventListener('click', () => {
    //     navUl.classList.toggle('show')
    // })

    return (
        <>
            <header id='hide-mobile'>
                <a href='/'><img class="logo" src={logo.default} width='60' height='60' alt='logo' /></a>
                <nav>
                    <ul class="nav-links">
                        {(currentPage === '/') ? <li><a className='active' href='/'>Home</a></li> : <li><a href='/'>Home</a></li>}
                        {(currentPage === '/about') ? <li><a className='active' href='/about'>About</a></li> : <li><a href='/about'>About</a></li>}
                    </ul>
                </nav>
                <a href='/contact'><button>Contact</button></a>
            </header>
            {/* <header id='show-mobile'>
                <div className='nav'>
                    <a href='/'><img class="logo" src={logo.default} width='60' height='60' alt='logo' /></a>
                    <a className='right-padding' href='/contact'><button>Contact</button></a>
                    <button id='hamburger' href='#'><img className='hamburger' src={hamburger.default} alt='' /></button>
                </div>
                <div>
                    <ul class="nav-links" id='nav-ul'>
                        {(currentPage === '/') ? <li><a className='active' href='/'>Home</a></li> : <li><a href='/'>Home</a></li>}
                        {(currentPage === '/about') ? <li><a className='active' href='/about'>About</a></li> : <li><a href='/about'>About</a></li>}
                    </ul>
                </div>
            </header> */}
        </>

    )
}

export default Mynavbar
