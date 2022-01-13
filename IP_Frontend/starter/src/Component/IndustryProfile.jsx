import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import Vacancies from './Vacancies';
import axios from 'axios';

const IndustryProfile = () => {
    const [industry, setIndustry] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const state = location.states;

    const getIndustry = async () => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editIndustry/' + `${id}`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getIndustry().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setIndustry(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <>
            <div className="body nospacing">
                <div>
                    <Link to={`/industries`}>
                        <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                    </Link>
                    <Link to={`/addVacancy/` + `${industry._id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Add Vacancy</button>
                    </Link>
                    <Link to={`/editIndustry/` + `${industry._id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Edit Company</button>
                    </Link>
                    <Link to={`/editIndustry/` + `${industry._id}`}>
                        <button id="editButton" type="button" className="btn btn-primary">Delete Company</button>
                    </Link>
                    <Link to={`/registeredUsers/`}>
                        <button id="editButton" type="button" className="btn btn-primary">View Registered Users</button>
                    </Link>
                </div>
                <div className="container shadow mb-5 bg-body rounded">
                    <div className='row'>
                        <ContainerHeader title={state ? state.name : industry.name} />
                    </div>

                    <div className="container shadow mb-5 bg-body rounded" >
                        <div className="row">
                            <div className=" col-sm body-align-left" id='left'>
                                <ul className="list">
                                    <li><b>Description: </b>{state ? state.description : industry.description}</li>
                                    <li><b>Location: </b>{state ? state.location : industry.location}</li>
                                </ul>
                            </div>
                            <div className='list col-md body-align-right' id='right'>
                                <li>
                                    <div>
                                        <img src={(industry?.image || state?.image) && (industry ? `http://127.0.0.1:4000/` + `${industry.image}` : `http://127.0.0.1:4000/` + `${state.image}`)} alt="Industry Logo" className="img" />
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                {(industry || state) && <Vacancies companyName={state ? state.name : industry.name} />}
            </div>
        </>
    )
}

export default IndustryProfile;