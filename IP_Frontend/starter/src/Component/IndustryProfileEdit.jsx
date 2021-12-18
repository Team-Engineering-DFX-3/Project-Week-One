import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'

// import IndustryProfileEditForm from '../Component/Forms/IndustryProfileEditForm';

export default function IndustryProfileEdit() {
    const navigate = useNavigate();
    const [industryData, setIndustryData] = useState({
        name: ``,
        description: ``,
        location: ``,
        image: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setIndustryData({
            ...industryData,
            [name]: value
        });
        console.dir("Industry data: " + industryData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/edit', industryData);
            console.log('hi');
            alert(response.data.message);
            setIndustryData(response.data.profile);
            navigate('/', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <body class='body'>
                <div class='container shadow mb-5 bg-body rounded'>
                    <div class='row'>
                        <ContainerHeader title="Edit profile" />
                        <Link to="/">
                            <button id="editButton" type="button" class="btn btn-primary">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='sub-entry'>
                        <ul className='list' id='left'>
                            <li><label for="company_name">Company Name:</label><br></br></li>
                            <li><input className='input' type="text" id="company_name" name="name" value={industryData.name} onChange={handleChange} placeholder="Company Name" required /><br></br></li>
                            <li><label for="description">Company Description:</label><br></br></li>
                            <li><input className='input' type="text" id="description" name="description" value={industryData.description} onChange={handleChange} placeholder="Company Description" required /><br></br></li>
                            <li><label for="location">Company Location:</label><br></br></li>
                            <li><input className='input' type="text" id="location" name="location" value={industryData.location} onChange={handleChange} placeholder="Company Location" required /><br></br></li>
                            <li><label for="customFile">Upload Company Logo:</label><br></br></li>
                            <li><input className='input' type="file" id="location" name="image" onChange={handleChange} value={industryData.image} accept="image/png, image/jpeg" id="customFile" /><br></br></li>
                        </ul>
                    </div>
                    <div className='modal-div container shadow p-3 mb-5 bg-body rounded'>
                        <input type="submit" value="Submit profile changes" className="btn btn-primary btn-custom" />

                    </div>

                </form >

                {/* <div>
            <div classNameName="container c2">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <label for="company_name" className="col-sm-2 col-form-label">Company Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="company_name" name="name" value={industryData.name} onChange={handleChange} placeholder="Company Name" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="description" className="col-sm-2 col-form-label">Company Description</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="description" name="description" value={industryData.description} onChange={handleChange} placeholder="Company Description" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="location" className="col-sm-2 col-form-label">Location</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="location" name="location" value={industryData.location} onChange={handleChange} placeholder="Company Location" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label" for="customFile" >Upload Logo</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" name="image" onChange={handleChange} value={industryData.image} accept="image/png, image/jpeg" id="customFile" />
                                    <button type="submit">Upload</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-outline-primary">Save Changes</button>
                        </div>
                        <br />
                    </div>
                </form>
            </div>
        </div
        > */}
            </body >
        </>
    )
}
