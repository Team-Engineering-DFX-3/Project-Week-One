import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
// import image_holder from './images/image_holder.png';
import ContainerHeader from './Header/ContainerHeader';
// import FormData from 'form-data';
import axios from 'axios';

const AddVacancy = () => {
    const [vacancyData, setVacancyData] = useState({});
    // const [industry, setIndustry] = useState({});
    // const [file, setFile] = useState();
    // const handleChangeFile = (e) => {
    //     const file = e.target.files[0];
    //     setFile(file);
    // }

    const handleChange = e => {
        const { name, value } = e.target;
        setVacancyData({
            ...vacancyData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'post', url: `https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/addVacancy`,
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
    };

    return (
        <>

            <div className="container shadow mb-5 bg-body rounded">
                <div className='row'>
                    <ContainerHeader title="Add New Vacancy" />
                </div>

                <form>
                    <div className="container shadow mb-5 bg-body rounded" >
                        <div className="row">
                            <div className=" col-sm body-align-left" id='left'>
                                <ul className="list">
                                    <li><label htmlFor="company_name">Designation</label></li>
                                    <li><input className='input' type="text" id="designation" name="designation" onChange={handleChange} placeholder="Designation to be offered" required /></li>
                                    <li><label htmlFor="company_name">Company Name</label></li>
                                    <li><input className='input' type="text" id="company_name" name="company_name" onChange={handleChange} placeholder="Company Name" required /></li>
                                    <li><label htmlFor="company_description">Job Location</label></li>
                                    <li><input className='input' type="text" id="job_location" name="job_location" onChange={handleChange} placeholder="Job Location" required /></li>
                                    <li><label htmlFor="company_location">Mode of Work</label></li>
                                    <li><input className='input' type="radio" id="company_location" name="mode" value="office" onChange={handleChange} /> In Office</li>
                                    <li><input className='input' type="radio" id="company_location" name="mode" value="remote" onChange={handleChange} /> Remote</li>
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
        </>
    )
}

export default AddVacancy;