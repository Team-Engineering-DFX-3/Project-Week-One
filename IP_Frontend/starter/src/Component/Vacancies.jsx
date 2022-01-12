import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";

import ContainerHeader from './Header/ContainerHeader';

const Vacancies = (props) => {
    const cname = props.companyName;
    const [vacancyData, setVacancyData] = useState([]);
    // console.log(cname)
    const getVacancyData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:4000/addVacancy/` + `${cname}`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getVacancyData().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setVacancyData([...resp.data]);
            }
        }).catch((err) => {
            throw (err);
        });
    }, [cname]);

    return (
        <>
            {
                (vacancyData.length > 0) ? <h1> Vacancies</h1> : <h1> Sorry!! No Vacancies Currently.</h1>
            }
            <div>
                <div className="body-align-center body">

                    {
                        vacancyData.map(vacancy => {
                            return (

                                <div className="container shadow mb-5 bg-body rounded ">
                                    <div className='row'>
                                        <ContainerHeader key={vacancy._id} title={vacancy.designation} />
                                    </div>
                                    <div className="container shadow mb-5 bg-body rounded ">
                                        <div className='row'>
                                            <div className=" col-sm body-align-left" id='left'>
                                                <ul className="list">
                                                    <li className="card-text"><b>Company: </b>{vacancy.company_name}</li>
                                                    <li className="card-text"><b>Job Location: </b>{vacancy.job_location}</li>
                                                    <li className="card-text"><b>Mode of Work: </b>{vacancy.mode}</li>
                                                    <li className="card-text"><b>Qualification Required: </b>{vacancy.qualification}</li>
                                                </ul>
                                                <Link to="/registerVacancy/">
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
        </>
    )

}


export default Vacancies;