import '../Component/css/App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import image_holder from './images/image_holder.png';
import ContainerHeader from './Header/ContainerHeader';
import FormData from 'form-data';
import axios from 'axios';

const AddIndustry = () => {
    const [industryData, setIndustryData] = useState({});
    const [file, setFile] = useState();
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setIndustryData({
            ...industryData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('industry', JSON.stringify(industryData));
            formData.append("image", file);
            const response = await axios({
                method: 'post', url: `http://127.0.0.1:4000/addIndustry`,
                data: formData,
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            if (response.data.message === `Company already exists`) {
                setIndustryData(response.data.industryprofile);
                alert(response.data.message);
            }
            else {
                if (response.data.message === `Company Registered successfully`) {
                    setIndustryData(response.data.industryprofile);
                    alert(response.data.message);
                }
            }
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
                    {(industryData?._id) ?
                        <>
                            <Link to={`/industry/` + `${industryData._id}`}>
                                <button id="editButton" type="button" className="btn btn-primary">View Company Profile </button>
                            </Link>
                            <Link to={`/addVacancy/` + `${industryData._id}`}>
                                <button id="editButton" type="button" className="btn btn-primary">Add Vacancy</button>
                            </Link>
                        </>
                        :
                        <Link to={``} className="disabledCursor" onClick={(event) => event.preventDefault()} >
                            <button id="editButton" type="button" className="btn btn-primary">View Company Profile </button>
                        </Link>
                    }
                    <Link to={`/industries`}>
                        <button id="editButton" type="button" className="btn btn-primary">View all Companies </button>
                    </Link>
                </div>

                <div className="container shadow mb-5 bg-body rounded">
                    <div className='row'>
                        <ContainerHeader title="Add New Company" />
                    </div>

                    <form>
                        <div className="container shadow mb-5 bg-body rounded" >
                            <div className="row">
                                <div className=" col-sm body-align-left" id='left'>
                                    <ul className="list">
                                        <li><label htmlFor="company_name">Company Name</label></li>
                                        <li><input className='input' type="text" id="company_name" name="name" onChange={handleChange} placeholder="Company Name" required /></li>
                                        <li><label htmlFor="company_description">Company Description</label></li>
                                        <li><input className='input' type="text" id="company_description" name="description" onChange={handleChange} placeholder="Company Description" required /></li>
                                        <li><label htmlFor="company_location">Company Location</label></li>
                                        <li><input className='input' type="text" id="company_location" name="location" onChange={handleChange} placeholder="Company Location" required /></li>
                                    </ul>
                                </div>
                                <div className='list col-md body-align-right' id='right'>
                                    <ul className='list body-align-right' id='right' >
                                        <li><img src={image_holder} alt="Company Logo" className="img" /></li>
                                        <li><input className="inputImage" type="file" name="image" onChange={handleChangeFile} accept="image/png, image/jpeg" required /></li>
                                    </ul>
                                </div>
                            </div>
                        </div >

                        <div className=' container shadow p-3 mb-5 bg-body rounded'>
                            <div className="row">
                                <div className="col-sm-5">
                                    <button type="submit" className="btn btn-primary btn-custom" onClick={handleSubmit}>Add Company</button>
                                </div>
                                <div className="col-sm-5">
                                    <Link to={`/industries`}>
                                        <button type="button" className="btn btn-info btn-custom">Cancel Changes</button>
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-danger btn-custom" onClick={handleReset} form="industryProfileForm">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </div>

        </>
    )
}

export default AddIndustry;