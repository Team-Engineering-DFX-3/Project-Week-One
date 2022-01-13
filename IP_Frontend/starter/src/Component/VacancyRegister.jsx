import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'
const RegisteredUsers = () => {
	// const [discipline, setDiscipline] = useState({});
	// var discipline;
	const [registeredUser, setRegisteredUser] = useState([]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const apply_discipline = document.getElementById('apply_discipline').value;
			// setDiscipline(apply_discipline);
			// discipline = apply_discipline;
			const response = await axios({
				method: 'get', url: `https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/registerVacancy/` + apply_discipline,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=UTF-8'
				},
			});
			setRegisteredUser(response.data);
		}
		catch (ex) {
			throw ex;
		}
	};

	return (
		<>
			<div>
				<Link to={`/industries`}>
					<button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
				</Link>
				<Link to={`/allVacancies`}>
					<button id="editButton" type="button" className="btn btn-primary">View all Vacancies </button>
				</Link>
			</div>
			<div className="body-align-center body">
				<div className="list container body-align-center shadow p-3 mb-5 bg-body rounded">
					<form>
						<li><select name="apply_discipline" id="apply_discipline" className="selectmenu" required>
							<option selected="true" disabled="disabled">Please select discipline</option>
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
								{/* <div className="row"> */}
								{
									(registeredUser.length > 0) ? <h1> </h1> : <h1> Sorry!!No Registered Users.</h1>
								}
								{

									registeredUser.map(user => {
										return (

											<div className="container_small card-body">

												<div className="container shadow mb-5 bg-body rounded ">
													<div className='row'>
														<div className=" col-sm body-align-left" id='left'>
															<ul className="list">
																<li className="card-text"><b>Applicant Name: </b>{user.applicant_name}</li>
																<li className="card-text"><b>Company: </b>{user.company_name}</li>
																<li className="card-text"><b>Designation: </b>{user.designation}</li>
																<li className="card-text"><b>Applicant Experience: </b>{user.applicant_experience}years</li>
																<li className="card-text"><b>Applicant Location: </b>{user.applicant_location}</li>
															</ul>

														</div>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						</div></div>
				</div>
			</div>
		</>
	)
}
export default RegisteredUsers;