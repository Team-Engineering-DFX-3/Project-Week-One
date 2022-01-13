import React from 'react'
import '../css/App.css';
import logo from '../images/logo.png'

export default function Header() {
    return (
        <>
            <header className='dfxHeader'>
                <div className="inside">
                    <img src={logo} alt="logo" className="header-img" width={100} /><h1 class="header-text" style={{ float: 'right' }}>DFX</h1>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/User">Graduates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/industries">Industries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <h2 className="nav-text" >Home</h2> */}
            </header>
        </>
    )
}
