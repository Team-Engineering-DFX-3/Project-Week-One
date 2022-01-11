import React from 'react'
import { useLocation } from 'react-router-dom';
import IndustryProfile from './IndustryProfile';
import Vacancy from './Vacancy';

function Home() {
    return (
        <>
            <body className='body'>
                <div>
					
					
                    <IndustryProfile />

                    <Vacancy />
    
                </div>
            </body>
        </>
    )
}

export default Home;
