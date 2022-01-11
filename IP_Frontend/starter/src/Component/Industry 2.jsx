import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";
import ContainerHeader from './Header/ContainerHeader';

const Industry = () => {
    const [industries, setIndustries] = useState([]);

    const getIndustries = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/industries');
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getIndustries().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setIndustries([...resp.data]);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <div className="body-align-center">
            {
                industries.map(industry => {
                    return (
                        <div className="container shadow mb-5 bg-body rounded ">
                            <div className='row'>
                                <Link to={`/industry/` + `${industry._id}`}>
                                    <ContainerHeader key={industry._id} title={industry.name} />
                                </Link>
                            </div>
                            <div className="container shadow mb-5 bg-body rounded ">
                                <div className='row'>
                                    <div className=" col-sm body-align-left" id='left'>
                                        <ul className="list">
                                            <li className="card-title mb-2 text-muted">{industry.description}</li>
                                            <li className="card-text">{industry.location}</li>
                                        </ul>
                                    </div>
                                    <div className='list col-md body-align-right' id='right'>
                                        <img src={'http://127.0.0.1:4000/' + `${industry.image}`} alt="Industry Logo" className="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Industry;


