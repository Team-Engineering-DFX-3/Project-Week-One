import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import Vacancies from './Vacancies';
import axios from 'axios';

const Industry_Profile = () => {
    const [industry, setIndustry] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const state = location.states;

    const getIndustry = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/editIndustry/' + `${id}`);
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
                console.log(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <>
            <div>
                <Link to={`/industries`}>
                    <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                </Link>
                <Link to={`/editIndustry/` + `${industry._id}`}>
                    <button id="editButton" type="button" className="btn btn-primary">Edit </button>
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
                                <li>{state ? state.description : industry.description}</li>
                                <li>{state ? state.location : industry.location}</li>
                            </ul>
                        </div>
                        <div className='list col-md body-align-right' id='right'>
                            <li>
                                <div>
                                    <img src={state ? 'http://127.0.0.1:4000/' + `${state.image}` : 'http://127.0.0.1:4000/' + `${industry.image}`} alt="Industry Logo" className="img" />
                                </div>
                            </li>
                        </div>
                    </div>
                </div >
            </div>
            <Vacancies />
        </>
    )
}

export default Industry_Profile;