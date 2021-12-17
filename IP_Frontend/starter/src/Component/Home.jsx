import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import IndustryProfile from './IndustryProfile';
import Vacancies from './Vacancies';

function Home({ industryData }) {
    const location = useLocation();
    return (
        <>
            <body class='body'>
                <div>
                    <IndustryProfile industryData={industryData} />
                    <Vacancies />
                </div>
            </body>
        </>
    )
}

export default Home;
