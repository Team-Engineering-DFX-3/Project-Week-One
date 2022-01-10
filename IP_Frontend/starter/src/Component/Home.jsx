import React from 'react'
import { useLocation } from 'react-router-dom';
import IndustryProfile from './IndustryProfile';
import Vacancies from './Vacancies';

function Home() {
    return (
        <>
            <body className='body'>
                <div>
                    <IndustryProfile />
                    <Vacancies />
                </div>
            </body>
        </>
    )
}

export default Home;
