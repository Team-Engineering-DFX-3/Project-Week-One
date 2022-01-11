import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function VacanciesRegister() {
	const navigate = useNavigate();
	const [vacanciesData, setVacanciesData] = useState({
		name: ``,
		discipline: ``,
		title: ``,
		description: ``,
		location: ``
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setVacanciesData({
			...vacanciesData,
			[name]: value
		});
		console.dir("Vacancy data: " + vacanciesData);
	};

	const handleSubmit = async (e) => {
		console.log("entered handle");
		e.preventDefault();
		try {
			const response = await axios.post('http://127.0.0.1:4000/registerVacancy', vacanciesData);
			alert(response.data.message);
			setVacanciesData(response.data.registration);
			navigate('/', { state: response.data });

		}
		catch (e) {
			return "failure";
		}
	};

	return (
		<>
			<div class='body nospacing'>
				<Link to="/">
					<button id="editButton" type="button" class="btn btn-primary">
						Home
					</button>
				</Link>
				<div class='container shadow mb-5 bg-body rounded'>
					<div class='row'>
						<ContainerHeader title="Job Application" />
					</div>
				</div>
				<form id="vacancyRegisterForm">
					<div class='modal-div container shadow mb-5 bg-body rounded '>
						<ul className='list body-align-left' id='left' >

							<li><label for="applicant_name">Applicant Name:</label><br></br></li>
							<li><input className='input' type="text" id="applicant_name" name="name" onChange={handleChange} placeholder="Applicant Name" required /><br></br></li>

							<li><label for="applicant_discipline"> Applicant Discipline:</label><br></br></li>
							<li><input className='input' type="text" id="applicant_discipline" name="discipline" onChange={handleChange} placeholder=" Applicant Discipline" required /><br></br></li>

							<li><label for="applicant_jobtitle"> Applicant JobTitle:</label><br></br></li>
							<li><input className='input' type="text" id="applicant_jobtitle" name="title" onChange={handleChange} placeholder="Applicant JobTitle" required /><br></br></li>

							<li><label for="applicant_jobdescription"> Applicant JobDescription</label><br></br></li>
							<li><input className='input' type="text" id="applicant_jobdescription" name="description" onChange={handleChange} placeholder="Applicant JobDescription" required /><br></br></li>

							<li><label for="applicant_location"> Applicant Location:</label><br></br></li>
							<li><input className='input' type="text" id="applicant_location" name="location" onChange={handleChange} placeholder="Applicant Location" required /><br></br></li>

						</ul>
					</div>

					<div className='modal-div container shadow p-3 mb-5 bg-body rounded'>
						<div className="row">
							<div className="col-sm-5">
								<button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Job Application</button>
							</div>

						</div>
					</div>

				</form >

			</div >
		</>
	)
}

