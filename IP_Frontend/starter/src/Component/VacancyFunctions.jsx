import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import axios from 'axios';

const VacancyFunctions = () => {
    const [vacancy, setVacancy] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const state = location.states;

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
                // console.log(resp.data);
                setVacancy(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <>
            <div className="body nospacing">
                <div>
                    <Link to={`/forIndustry`}>
                        <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                    </Link>
                    <Link to={`/addVacancy/` + `${id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Add Vacancy</button>
                    </Link>
                    <Link to={`/editVacancy/` + `${vacancy._id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Edit Vacancy</button>
                    </Link>
                    <Link to={`/editVacancy/` + `${vacancy._id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Delete Vacancy</button>
                    </Link>
                </div>
                <div className="container shadow mb-5 bg-body rounded">
                    <div className='row'>
                        <Link to={`/editVacancy/` + `${vacancy._id}`}>
                            <ContainerHeader title={state ? state.designation : vacancy.designation} />
                        </Link>
                    </div>

                    <div className="container shadow mb-5 bg-body rounded" >
                        <div className="row">
                            <div className=" col-sm body-align-left" id='left'>
                                <ul className="list">
                                    <li><b>Company Name: </b>{state ? state.company_name : vacancy.company_name}</li>
                                    <li><b>Job Location: </b>{state ? state.job_location : vacancy.job_location}</li>
                                    <li><b>Mode of Work: </b>{state ? state.mode : vacancy.mode}</li>
                                    <li><b>Qualification: </b>{state ? state.qualification : vacancy.qualification}</li>
                                </ul>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default VacancyFunctions;