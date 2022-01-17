import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

const RegisteredUsers = () => {
    const [registeredUser, setRegisteredUser] = useState([]);

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const company_name = document.getElementById('company_name').value;
            const apply_discipline = document.getElementById('apply_discipline').value;
            const response = await axios({
                method: 'get', url: `http://127.0.0.1:4000/registerVacancy/` + apply_discipline + `&` + company_name,

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            });
            if (((response.data).length) > 0) {
                setRegisteredUser(response.data);
            }
            else {
                alert("Sorry!! No registered users");
            }

        }
        catch (ex) {
            throw ex;
        }
        handleReset();
    };

    return (
        <>
            <div>
                <Link to={`/forIndustry`}>
                    <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                </Link>
                <Link to={`/allVacancies`}>
                    <button id="editButton" type="button" className="btn btn-primary">View all Vacancies </button>
                </Link>
            </div>
            <div className="body-align-center body">
                <div className="list container body-align-center shadow p-3 mb-5 bg-body rounded">
                    <form>

                        <li><input className='input' type="text" id="company_name" name="company_name" placeholder="Company Name" required /><br /></li>
                        <li><select name="apply_discipline" id="apply_discipline" className="selectmenu" required>
                            <option selected disabled>Please select discipline</option>
                            <option value="Modern Software Engineering">Modern Software Engineering</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Cloud Engineering">Cloud Engineering</option>
                        </select>
                        </li>

                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>


                    <div className="body-align-center">

                        <div className="container body-align-center shadow p-3 mb-5 bg-body rounded">

                            <div className="row">
                                {
                                    registeredUser.map(user => {

                                        return (

                                            <>
                                                {
                                                    (user !== undefined || user !== {}) ? <h1> </h1> : <h1> Sorry!! No Registered Users.</h1>
                                                }

                                                <div className="container_small card-body">

                                                    <div className="container shadow mb-5 bg-body rounded ">
                                                        <div className='row'>
                                                            <div className=" col-sm body-align-left" id='left'>
                                                                <ul className="list">
                                                                    <li className="card-text"><b>Applicant Name: </b>{user.applicant_name}</li>
                                                                    <li className="card-text"><b>Company: </b>{user.company_name}</li>
                                                                    <li className="card-text"><b>Discipline: </b>{user.apply_discipline}</li>
                                                                    <li className="card-text"><b>Designation: </b>{user.designation}</li>
                                                                    <li className="card-text"><b>Applicant Experience: </b>{user.applicant_experience}years</li>
                                                                    <li className="card-text"><b>Applicant Location: </b>{user.applicant_location}</li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegisteredUsers;