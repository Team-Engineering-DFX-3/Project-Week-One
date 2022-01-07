import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import axios from 'axios';

const Industry_Profile = () => {

    const [industry, setIndustry] = useState({});
    // const [state, setState] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const state = location.states;
    // setState(location.state);
    const getIndustry = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/industry/' + `${id}`);
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getIndustry().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setIndustry(resp.data);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <>
            <div className="container shadow mb-5 bg-body rounded" >
                <div className='row'>
                    <ContainerHeader title={state ? state.name : industry.name} />
                </div>
                <div className="row">
                    <div className=" col-sm body-align-left" id='left'>
                        <Link to={`/editIndustry/` + `${industry._id}`}>
                            {/* <Link to="/editIndustry/"> */}
                            <button id="editButton" type="button" className="btn btn-primary">Edit </button>
                        </Link>
                        <ul className="list">
                            <li>Company Description: {state ? state.description : industry.description}</li>
                            <li>Location: {state ? state.location : industry.location}</li>
                        </ul>
                    </div>
                    <div className='list col-md body-align-right' id='right'>
                        <li>
                            <div>
                                {/* <img src={barclays} alt="Industry Logo" className="img-fluid" /> */}
                                {/* <img src={state?.image} alt="Industry Logo" className="img-fluid" /> */}
                            </div>
                        </li>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Industry_Profile;