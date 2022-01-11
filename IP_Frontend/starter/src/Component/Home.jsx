import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import IndustryProfile from './IndustryProfile';
import Vacancy from './Vacancy';

function Home({ industryData }) {
    const location = useLocation();
    return (
        <>
            <body class='body'>
                <div>
                    <IndustryProfile industryData={industryData} />
					<Vacancy  />
					
                </div>
            </body>
        </>
    )
}

export default Home;
