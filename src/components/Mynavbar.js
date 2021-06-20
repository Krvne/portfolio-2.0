import React from 'react'
import '../css/mynavbar.css'

const Mynavbar = () => {
    var logo = require('./images/logo.png')
    const currentPage = window.location.pathname
    const hamburger = require('./images/hamburger.png')

    let showLinks = false

    function mobileNavToggle() {
        console.log('working')
        if (showLinks === false) {
            showLinks = true
        } else if (showLinks === true) {
            showLinks = false
        }
        console.log(showLinks)
    }

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
            <header id='show-mobile'>
                <div className='nav-items'>
                    <a href='/'><img class="logo" src={logo.default} width='60' height='60' alt='logo' /></a>
                    <a href='/contact'><button>Contact</button></a>
                    <a id='hamburger' href='#' onClick={mobileNavToggle}><img className='hamburger' src={hamburger.default} alt='' width='60' /></a>
                </div>
                <div className={(showLinks === false) ? 'links' : 'links show'}>
                    <ul class="nav-links">
                        {(currentPage === '/') ? <li><a className='active' href='/'>Home</a></li> : <li><a href='/'>Home</a></li>}
                        {(currentPage === '/about') ? <li><a className='active' href='/about'>About</a></li> : <li><a href='/about'>About</a></li>}
                    </ul>
                </div>
            </header>
        </>

    )
}

export default Mynavbar
