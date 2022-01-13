import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

export default function VacanciesRegister() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [vacancyData, setVacancyData] = useState({});

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
				setVacancyData(resp.data);
			}
		}).catch((err) => {
			throw (err);
		})
	}, []);

	const handleChange = e => {
		const { name, value } = e.target;
		setVacancyData({
			...vacancyData,
			[name]: value
		});

	};

	const handleReset = () => {
		Array.from(document.querySelectorAll("input")).forEach(
			input => (input.value = "")
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://127.0.0.1:4000/registerVacancy', vacancyData);
			alert(response.data.message);
			setVacancyData(response.data.registration);

		}
		catch (e) {
			return "failure";
		}
		handleReset();
	};

	return (
		<>
			<div class='body nospacing'>
				<Link to={`/allVacancies`}>
					<button id="editButton" type="button" class="btn btn-primary">
						All Vacancies
					</button>
				</Link>
				<Link to={`/industries`}>
					<button id="editButton" type="button" class="btn btn-primary">
						All Companies
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

							<li><label htmlFor="applicant_name">Applicant Name</label><br></br></li>
							<li><input className='input' type="text" id="applicant_name" name="applicant_name" onChange={handleChange} placeholder="Applicant's Name" required /><br></br></li>
							<li><label htmlFor="applicant_discipline"> Applicant Discipline</label><br></br></li>
							<li><select name="apply_discipline" onChange={handleChange} className="selectmenu" required>
								<option selected disabled>Please select discipline</option>
								<option value="Modern Software Engineering">Modern Software Engineering</option>
								<option value="Data Science">Data Science</option>
								<option value="Cloud Engineering">Cloud Engineering</option>
							</select>
							</li>
							<li><label htmlFor="apply_company"> Applying in Company</label><br></br></li>
							<li><input className='input' type="text" id="apply_company" name="company_name" onChange={handleChange} defaultValue={vacancyData.company_name} disabled placeholder="Applying for Company" required /><br></br></li>

							<li><label htmlFor="apply_designation"> Applying for Designation</label><br></br></li>
							<li><input className='input' type="text" id="apply_designation" name="designation" onChange={handleChange} defaultValue={vacancyData.designation} disabled placeholder="Applying for Designation" required /><br></br></li>

							<li><label htmlFor="applicant_experience">Years of Experience</label><br></br></li>
							<li><input className='input' type="number" id="applicant_experience" name="applicant_experience" onChange={handleChange} placeholder="Applicant's years of experience if any" required /><br></br></li>

							<li><label htmlFor="applicant_location"> Applicant Location:</label><br></br></li>
							<li><input className='input' type="text" id="applicant_location" name="applicant_location" onChange={handleChange} placeholder="Applicant's Location" required /><br></br></li>

						</ul>
					</div>

					<div className='modal-div container shadow p-3 mb-5 bg-body rounded'>
						<div className="row">
							<div className="col-sm-5">
								<button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Job Application</button>
							</div>
							<div className="col-sm-5">
								<Link to={`/allVacancies`}>
									<button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
								</Link>
							</div>
							<div className="col-sm-2">
								<button type="submit" className="btn btn-danger btn-custom" onClick={handleReset} form="industryProfileForm">Reset</button>
							</div>



						</div>
					</div>

				</form >

			</div >
		</>
	)
}

