import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";
import ProfileModal from './Modal/ProfileModal';
import { Button } from 'react-bootstrap';

const GraduateSpotlight = () => {
    const [spUser, setSpUser] = useState([]);

    const getSpUser = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/editUser');
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getSpUser().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setSpUser([...resp.data.result]);
                console.log(resp.data.result);
                console.log(resp.data.result[0].name);
            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    return (
        <div className="body-align-center">
            {
                //user.map(spotlight => {
                //return (

                <body className="body">
                    <div className="container body-align-left shadow p-3 mb-5 bg-body rounded" >
                        <h1>Talent Spotlight </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatum repudiandae saepe perferendis debitis consequuntur dicta, quia adipisci beatae, iste ipsum deserunt unde aperiam enim autem officia laudantium doloribus modi?</p>
                    </div>
                    <div className="container body-align-left shadow p-3 mb-5 bg-body rounded">
                        <div className='row'>
                            <h3>Software Engineering </h3>
                            {spUser.map(spotlight => {
                                return (
                                    <ul className='list col-sm  body-align-center container shadow p-3 mb-5 bg-body rounded' id='left'>
                                        <div className="card vacancy">
                                            <div className="card-body">
                                                <h5 className="card-title">  </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Software Engineer</h6>
                                                <li className="card-text">{spotlight.name}</li>
                                                <li className="card-text">{spotlight.pemail}</li>
                                                <li className="card-text">{spotlight.dfemail}</li>

                                                <ProfileModal />
                                            </div>
                                        </div>
                                    </ul>
                                )
                            }
                            )
                            }
                        </div>
                    </div >

                    <div className="container body-align-left shadow p-3 mb-5 bg-body rounded">
                        <div className='row'>
                            <h3> Data Science  </h3>
                            <ul className='list col-sm  body-align-center container shadow p-3 mb-5 bg-body rounded' id='left'>
                                <div className="card vacancy">
                                    <div className="card-body">
                                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
                                        <h5 className="card-title">Jane Doe </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Cloud Engineering </h6>
                                        <p className="card-text">Some  text of the card.</p>

                                        <ProfileModal />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div >
                    <div className="container body-align-left shadow p-3 mb-5 bg-body rounded">
                        <div className='row'>
                            <h3> Cloud Engineering   </h3>
                            <ul className='list col-sm  body-align-center container shadow p-3 mb-5 bg-body rounded' id='left'>
                                <div className="card vacancy">
                                    <div className="card-body">
                                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
                                        <h5 className="card-title">Jane Doe </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Cloud Engineer </h6>
                                        <p className="card-text">Some  text of the card.</p>

                                        <ProfileModal />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div >
                </body>

                // )
                // })
            }
        </div>

    )
};
export default GraduateSpotlight;
