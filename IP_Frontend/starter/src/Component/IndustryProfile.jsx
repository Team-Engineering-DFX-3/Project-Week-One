import barclays from '../Component/images/barclays.png';
import '../Component/css/App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';
import axios from 'axios';
const Industry_Profile = ({ industryData }) => {
    // const Industry_Profile = () => {
    // var details;
    const [industry, setIndustry] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const state = location.state;
    // const state = location.state || {
    //     profile: {
    //         name: "DigitalFutures", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur ?", location: "London"
    //     }
    // };

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
                console.log(resp.data);
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
                        <Link to="/editIndustry/">
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






    // return (
    //     <>
    //         <div className="container shadow mb-5 bg-body rounded " >
    //             <div className='row'>
    //                 <ContainerHeader title={state?.profile?.name} />
    //             </div>
    //             <div className="row">
    //                 <div className=" col-sm body-align-left" id='left'>

    //                     <Link to="/editIndustry/">
    //                         <button id="editButton" type="button" className="btn btn-primary">Edit </button>
    //                     </Link>

    //                     <ul className="list">
    //                         <li>Company Description: {state?.profile?.description}</li>
    //                         <li>Location: {state?.profile?.location}</li>
    //                     </ul>
    //                 </div>

    //                 <div className='list col-md body-align-right' id='right'>
    //                     <li>
    //                         <div>
    //                             {/* <img src={barclays} alt="Industry Logo" className="img-fluid" /> */}
    //                             {/* <img src={state?.image} alt="Industry Logo" className="img-fluid" /> */}
    //                         </div>
    //                     </li>
    //                 </div>
    //             </div>
    //         </div >
    //     </>
    // )
}

export default Industry_Profile;