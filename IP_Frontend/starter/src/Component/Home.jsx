import React from 'react'
import { useLocation } from 'react-router-dom';
import IndustryProfile from './IndustryProfile';
import Vacancy from './Vacancy';

function Home() {
    return (
        <>
            <body className='body'>
                <div>
<<<<<<< HEAD
                    <IndustryProfile industryData={industryData} />
					<Vacancy  />
					
=======
                    <IndustryProfile />
                    <Vacancies />
>>>>>>> 0ef988dc2222971907a1536b11f59204739a99d1
                </div>
            </body>
        </>
    )
}

export default Home;
