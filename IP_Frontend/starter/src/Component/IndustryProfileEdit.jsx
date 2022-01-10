import React from 'react';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import ContainerHeader from './Header/ContainerHeader'
import FormData from 'form-data';

export default function IndustryProfileEdit() {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const [file, setFile] = useState();
    const [industryData, setIndustryData] = useState({
        name: state.name,
        description: state.description,
        location: state.location,
        image: state.image
    });

    const { id } = useParams();

    const getIndustry = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/editindustry/' + `${id}`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getIndustry().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setState(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setIndustryData({
            ...industryData,
            [name]: value
        });
        console.dir("Industry data: " + industryData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('industry', JSON.stringify(industryData));
            formData.append("image", file);
            const response = await axios({
                method: 'put', url: `http://127.0.0.1:4000/editIndustry/` + `${id}`,
                data: formData,
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            setIndustryData(response.data);
            navigate(`/industry/` + `${id}`, { states: response.data });

        }
        catch (ex) {
            throw ex;
        }
    };

    return (
        <>
            <div>
                <Link to={`/industry/` + `${id}`}>
                    <button id="editButton" type="button" class="btn btn-primary">
                        Back to Company
                    </button>
                </Link>
            </div>
            <div className='container shadow mb-5 bg-body rounded'>
                <div className='row'>
                    <ContainerHeader title="Edit profile" />
                </div>

                <form >
                    <div className='container shadow mb-5 bg-body rounded '>
                        <div className="row">
                            <div className=" col-sm body-align-left" id='left'>
                                <ul className='list body-align-left' id='left' >
                                    <li><label htmlFor="company_name">Company Name: </label><br /></li>
                                    <li><input className='input' type="text" id="company_name" name="name" defaultValue={state.name} onChange={handleChange} placeholder="Company Name" required /><br></br></li>
                                    <li><label htmlFor="description">Company Description: </label><br /></li>
                                    <li><input className='input' type="text" id="description" name="description" defaultValue={state.description} onChange={handleChange} placeholder="Company Description" required /><br></br></li>
                                    <li><label htmlFor="location">Company Location: </label><br /></li>
                                    <li><input className='input' type="text" id="location" name="location" defaultValue={state.location} onChange={handleChange} placeholder="Company Location" required /><br /></li>
                                </ul>
                            </div>

                            <div className=' col-sm body-align-right' id='right'>
                                <ul className='list body-align-right' id='right' >
                                    <li><img src={state.image && `http://127.0.0.1:4000/` + `${state.image}`} alt="Industry Logo" className="img" /></li>
                                    <li><input className="inputImage" type="file" name="image" onChange={handleChangeFile} accept="image/png, image/jpeg" defaultValue={state.image} required /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' container shadow p-3 mb-5 bg-body rounded'>
                        <div className="row">
                            <div className="col-sm-5">
                                <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Submit Profile Changes</button>
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
