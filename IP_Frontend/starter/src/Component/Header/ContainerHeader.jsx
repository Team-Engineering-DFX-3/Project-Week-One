import React from 'react'
import '../css/App.css';

export default function ContainerHeader(props) {
    return (
        <>
            <header className='dfxHeader'>
                <div className="inside">
                    <h1 class="header-text" style={{ float: 'right' }}>{props.title}</h1>
                </div>
            </header>
        </>
    )
}