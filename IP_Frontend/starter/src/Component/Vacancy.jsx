//import barclays from '../Component/images/barclays.png';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import axios from 'axios';

const Vacancy_Details = ({ vacanciesData }) => {
    const [vacancy, setVacancy] = useState({});
    const location = useLocation();
    const state = location.state;


    return (
        <div className="container shadow p-3 mb-5 bg-body rounded">
            <div className='row'>

                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='left'>
                    <div className="card vacancy">
                        <div className="card-body">
                            <div className='row'>
                                <ContainerHeader title="Card title" />
                            </div>
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some  text of the card.</p>
                            <Link to="/registerVacancy/">
                                <button id="editButton" type="button" className="btn btn-primary">Register</button>
                            </Link>

                        </div>
                    </div>
                </ul>
                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='right'>
                </ul>
                <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded margin-right' id='right'>
                </ul>
            </div>
        </div >
    )
}
export default Vacancy_Details;

