import React from 'react'
import '../css/App.css';
import logo from '../images/logo.png'

export default function Header() {
    return (
        <>
            <header className='dfxHeader'>
                <div className="inside">
                    <img src={logo} alt="logo" className="header-img" width={100} /> <h1 class="header-text" style={{ float: 'right' }}>DFX</h1>
                    <nav class="nav">
                        <ul>
                            {/* <li class="list-items"><a class="nav-link" href="./index.html">Home</a></li>
                            <li class="list-items"><a class="nav-link" href="./signupmm.html">Sign Up</a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
