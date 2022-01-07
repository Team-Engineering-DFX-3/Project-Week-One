import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'



export default function VacanciesEdit() {
    const navigate = useNavigate();
    const [vacanciesData, setVacanciesData] = useState({
        title: ``,
        description: ``,
        location: ``,
        
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setVacanciesData({
            ...vacanciesData,
            [name]: value
        });
        console.dir("Vacancy data: " + vacanciesData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/editVacancy', vacanciesData);
            console.log('hi');
            alert(response.data.message);
            setVacanciesData(response.data.vacancy);
            navigate('/', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <body class='body'>
                <div class='container shadow mb-5 bg-body rounded'>
                    <div class='row'>
                        <ContainerHeader title="Edit profile" />
                        <Link to="/">
                            <button id="editButton" type="button" class="btn btn-primary">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
                <form >
                    <div class='modal-div container shadow mb-5 bg-body rounded '>
                        <ul className='list body-align-left' id='left' >
                            <li><label for="company_name">Job Title:</label><br></br></li>
                            <li><input className='input' type="text" id="company_name" name="title" value={vacanciesData.title} onChange={handleChange} placeholder="Vacancy Title" required /><br></br></li>
                            <li><label for="description"> Job Description:</label><br></br></li>
                            <li><input className='input' type="text" id="description" name="description" value={vacanciesData.description} onChange={handleChange} placeholder=" Vacancy Description" required /><br></br></li>
                            <li><label for="location"> Job Location:</label><br></br></li>
                            <li><input className='input' type="text" id="location" name="location" value={vacanciesData.location} onChange={handleChange} placeholder="Vacancy Location" required /><br></br></li>
                        </ul>
                    </div>

                    <div className='modal-div container shadow p-3 mb-5 bg-body rounded'>
                        <div className="row">
                            <div className="col-sm-5">
                                <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Vacancy Changes</button>
                            </div>
                            <div className="col-sm-5">
                                <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
                            </div>
                            <div className="col-sm-2">
                                <button type="reset" className="btn btn-danger btn-custom">Reset</button>
                            </div>

                        </div>
                    </div>

                </form >

            </body >
        </>
    )
}
