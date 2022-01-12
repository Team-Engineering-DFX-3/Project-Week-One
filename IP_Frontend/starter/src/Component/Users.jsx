import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/css/App.css';
import { Link } from "react-router-dom";
import ProfileModal from './Modal/ProfileModal'; 
import { Button } from 'react-bootstrap';
//import { set } from 'mongoose';
//import ContainerHeader from './Header/ContainerHeader';

const User = () => {
    const [user, setUser] = useState([]);

    const getUser = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:4000/editUser');
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getUser().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setUser([...resp.data.result]);
                console.log(resp.data.result);
                
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
                            {user.map(spotlight => {
                                return (
                                    <ul className='list col-sm  body-align-center container shadow p-3 mb-5 bg-body rounded' id='left'>
                                        <div className="card vacancy">
                                            <div className="card-body">
                                                <div className='row'>
                                                    {/* <ContainerHeader title="Card title" /> */}
                                                </div>
                                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
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
                                        {/* <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='right'>
                                        </ul>
                                        <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded margin-right' id='right'>
                                        </ul> */}
                                    </div>
                                </div >

                                <div className="container body-align-left shadow p-3 mb-5 bg-body rounded">
                                    <div className='row'>
                                        <h3> Data Science  </h3>
                                        <ul className='list col-sm  body-align-center container shadow p-3 mb-5 bg-body rounded' id='left'>
                                            <div className="card vacancy">
                                                <div className="card-body">
                                                    <div className='row'>
                                                        {/* <ContainerHeader title="Card title" /> */}
                                                    </div>
                                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
                                                    <h5 className="card-title">Jane Doe </h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                    <p className="card-text">Some  text of the card.</p>

                                                    <ProfileModal />
                                                </div>
                                            </div>
                                        </ul>
                                        {/* <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded' id='right'>
                                        </ul>
                                        <ul className='list col-sm body-align-left container shadow p-3 mb-5 bg-body rounded margin-right' id='right'>
                                        </ul> */}
                                    </div>
                                </div >
                            </body>
                        
                    // )
                // })
            } 
        </div>

    )
};
export default User;