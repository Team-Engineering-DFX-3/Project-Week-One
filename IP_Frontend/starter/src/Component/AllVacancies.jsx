import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';

const AllVacancies = () => {
    const [vacancies, setVacancies] = useState([]);

    const getVacancies = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:4000/addVacancy`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getVacancies().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setVacancies([...resp.data]);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <>
            <div className="body-align-center body nospacing">
                <div>
                    <Link to={`/industries`}>
                        <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                    </Link>
                </div>
                <div className="container body-align-mid shadow p-3 mb-5 bg-body rounded">
                    <div className='row'>
                        {
                            vacancies.map(vacancy => {
                                return (
                                    <div className="container_small card-body">
                                        <div className='row'>
                                            <Link to={`/vacancyProfile/` + `${vacancy._id}`}>
                                                <ContainerHeader key={vacancy._id} title={vacancy.designation} />
                                            </Link>
                                        </div>
                                        <div className="container shadow mb-5 bg-body rounded ">
                                            <div className='row'>
                                                <div className=" col-sm body-align-left" id='left'>
                                                    <ul className="list">
                                                        <li className="card-text"><b>Company Name: </b>{vacancy.company_name}</li>
                                                        <li className="card-text"><b>Job Location: </b>{vacancy.job_location}</li>
                                                        <li className="card-text"><b>Mode of Work: </b>{vacancy.mode}</li>
                                                        <li className="card-text"><b>Qualification: </b>{vacancy.qualification}</li>
                                                    </ul>
                                                    <Link to={`/registerVacancy/` + `${vacancy._id}`}>
                                                        <button id="editButton" type="button" className="btn btn-primary">Register</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default AllVacancies;


