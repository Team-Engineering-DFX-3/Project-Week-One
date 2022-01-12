import '../Component/css/App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import axios from 'axios';

const AddVacancy = () => {
    const [vacancyData, setVacancyData] = useState({});
    const [messageField, setMessageField] = useState({ messageField: `` });
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
        setMessageField({
            messageField: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'post', url: `http://127.0.0.1:4000/addVacancy`,
                data: vacancyData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            });
            alert(response.data.message);
        }
        catch (ex) {
            throw ex;
        }
        handleReset();
    };

    return (
        <>
            <div className="body nospacing">
                <div>
                    <Link to={`/industries`}>
                        <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                    </Link>
                </div>

                <div className="container shadow mb-5 bg-body rounded">
                    <div className='row'>
                        <ContainerHeader title="Add New Vacancy" />
                    </div>

                    <form>
                        <div className="container shadow mb-5 bg-body rounded" >
                            <div className="row">
                                <div className=" col-sm body-align-left" id='left'>
                                    <ul className="list">
                                        <li><label htmlFor="designation">Designation</label></li>
                                        <li><input className='input' type="text" id="designation" name="designation" onChange={handleChange} placeholder="Designation to be offered" required /></li>
                                        <li><label htmlFor="company_name">Company Name</label></li>
                                        <li><input className='input' type="text" id="company_name" name="company_name" onChange={handleChange} placeholder="Company Name" required /></li>
                                        <li><label htmlFor="job_location">Job Location</label></li>
                                        <li><input className='input' type="text" id="job_location" name="job_location" onChange={handleChange} placeholder="Job Location" required /></li>
                                        <li><label htmlFor="mode_of_work">Mode of Work</label></li>
                                        <input type="radio" id="company_location" name="mode" value="Office" onChange={handleChange} /> In Office &nbsp;&nbsp;&nbsp;
                                        <input type="radio" id="company_location" name="mode" value="Remote" onChange={handleChange} /> Remote <br />
                                        <li><label htmlFor="required_qualification">Required Qualification</label></li>
                                        <li><input className='input' type="text" id="qualification" name="qualification" onChange={handleChange} placeholder="Required qualification" required /></li>

                                    </ul>
                                </div>
                            </div>
                        </div >
                        <div className=' container shadow p-3 mb-5 bg-body rounded'>
                            <div className="row">
                                <div className="col-sm-5">
                                    <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Add Vacancy</button>
                                </div>
                                <div className="col-sm-5">
                                    <Link to="/">
                                        <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <button type="reset" className="btn btn-danger btn-custom" form="industryProfileForm">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </>
    )
}

export default AddVacancy;