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
        <div className="row">
            <div className="col-sm-10">
                {
                    industries.map(industry => {
                        return (
                            <div className="container shadow p-3 mb-5 bg-body rounded">
                                <div class='row'>
                                    <ul class='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='left'>
                                        <div className="card vacancy">
                                            <div className="card-body">
                                                <div className='row'>
                                                    <Link to={`/` + `${industry._id}`}>
                                                        <ContainerHeader key={industry._id} title={industry.name} />
                                                    </Link>
                                                </div>

                                                <h4 className="card-title mb-2 text-muted">{industry.description}</h4>
                                                <h5 className="card-text">{industry.location}</h5>

                                                {/* <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a> */}
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

};
export default Industry;


