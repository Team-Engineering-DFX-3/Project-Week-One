import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function VacancyProfileEdit() {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const [vacancyData, setVacancyData] = useState({
        designation: state.designation,
        company_name: state.company_name,
        job_location: state.job_location,
        mode: state.mode,
        qualification: state.qualification
    });

    const { id } = useParams();

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    };

    const getVacancy = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/editVacancy/' + `${id}`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getVacancy().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setState(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);


    const handleChange = e => {
        const { name, value } = e.target;
        setVacancyData({
            ...vacancyData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'put', url: `http://127.0.0.1:4000/editVacancy/` + `${id}`,
                data: vacancyData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            });
            console.log(response.data);
            setVacancyData(response.data);
            navigate(`/vacancyProfile/` + `${id}`, { states: response.data });

        }
        catch (ex) {
            throw ex;
        }
        handleReset();
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'delete', url: `http://127.0.0.1:4000/editVacancy/` + `${id}`,
                data: vacancyData,
            });
            alert(response.data.message);
            navigate(`/industry/` + `${id}`, { states: response.data });
        }
        catch (ex) {
            throw ex;
        }
        handleReset();
    };

    return (
        <>
            <div className="body nospacing">
                <div>
                    <Link to={`/vacancyProfile/` + `${id}`}>
                        <button id="editButton" type="button" class="btn btn-primary">
                            Back to Vacancy
                        </button>
                    </Link>
                </div>
                <div className='container shadow mb-5 bg-body rounded'>
                    <div className='row'>
                        <ContainerHeader title="Edit Vacancy" />
                    </div>

                    <form >
                        <div className='container shadow mb-5 bg-body rounded '>
                            <div className="row">
                                <div className=" col-sm body-align-left" id='left'>
                                    <ul className='list body-align-left' id='left' >
                                        <li><label htmlFor="designation">Designation </label><br /></li>
                                        <li><input className='input' type="text" id="designation" name="designation" defaultValue={state.designation} onChange={handleChange} placeholder="Designation Offered" required /><br></br></li>
                                        <li><label htmlFor="company_name">Company Name </label><br /></li>
                                        <li><input className='input' type="text" id="company_name" name="company_name" defaultValue={state.company_name} onChange={handleChange} placeholder="Company Name" required /><br></br></li>
                                        <li><label htmlFor="job_location">Job Location </label><br /></li>
                                        <li><input className='input' type="text" id="job_location" name="job_location" defaultValue={state.job_location} onChange={handleChange} placeholder="Job Location" required /><br /></li>
                                        <li><label htmlFor="work_mode">Mode of Work </label><br /></li>
                                        <li><input className='input' type="text" id="mode" name="mode" defaultValue={state.mode} onChange={handleChange} placeholder="Mode of Work" required /><br /></li>
                                        <li><label htmlFor="qualification">Qualification Required </label><br /></li>
                                        <li><input className='input' type="text" id="qualification" name="qualification" defaultValue={state.qualification} onChange={handleChange} placeholder="Qualification Required" required /><br /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=' container shadow p-3 mb-5 bg-body rounded'>
                            <div className="row">
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Vacancy Changes</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-danger btn-custom" onClick={handleDelete}>Delete Vacancy</button>
                                </div>
                                <div className="col-sm-3">
                                    <Link to={`/vacancyProfile/` + `${id}`}>
                                        <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
                                    </Link>
                                </div>
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-danger btn-custom" onClick={handleReset} form="industryProfileForm">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}
