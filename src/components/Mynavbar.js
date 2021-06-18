import React from 'react'
import '../css/mynavbar.css'

const Mynavbar = () => {
    var logo = require('./images/logo.png')
    const currentPage = window.location.pathname

    return (
        <>
            <header>
                <a href='/'><img class="logo" src={logo.default} width='60' height='60' alt='logo' /></a>
                <nav>
                    <ul class="nav-links">
                        {(currentPage === '/') ? <li><a className='active' href='/'>Home</a></li> : <li><a href='/'>Home</a></li>}
                        {(currentPage === '/about') ? <li><a className='active' href='/about'>About</a></li> : <li><a href='/about'>About</a></li>}
                    </ul>
                </nav>
                <a class="" href='/contact'><button>Contact</button></a>
            </header>
        </>

    )
}

export default Mynavbar
