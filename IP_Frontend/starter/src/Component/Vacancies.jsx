import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import ContainerHeader from './Header/ContainerHeader';

const Vacancies = (props) => {
    const cname = props.companyName;
    const [vacancyData, setVacancyData] = useState([]);
    const { name } = useParams();
    const comp_name = props ? cname : name;
    const getVacancyData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:4000/addVacancy/` + `${comp_name}`);
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
        })
    }, [vacancyData]);

    return (
        <> <h1> Vacancies</h1>
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