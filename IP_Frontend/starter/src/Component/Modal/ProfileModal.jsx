import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';

export default function PortfolioModal() {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);
    // const navigate = useNavigate();
    // const [portfolioData, setPortfolioData] = useState({
    //     title: ``,
    //     url: ``,
    //     description: ``,
    // });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    
    const handleSubmit = () => {
        //console.log("entered handle");
        setShow(false);
        // e.preventDefault();
        // try {
        //     const response = await axios.post('http://127.0.0.1:4000/editPortfolio', portfolioData);
        //     console.log('hi');
        //     alert(response.data.message);
        //     console.log(response.data.portfolio);
        //     setPortfolioData(response.data.portfolio);
        //     navigate('/UserEdit', { state: response.data });

        // }
        // catch (e) {
        //     return "failure";
        // }
    };

    return (
        <>
         
             <Button variant="primary" onClick={handleShow}>
                View Profile 
            </Button> 
            {
                user.map(spotlight => {

                    
                        <div className="container shadow mb-5 bg-body rounded ">
                            <div className="container shadow mb-5 bg-body rounded ">
                                <div className='row'>
                                    <div className=" col-sm body-align-left" id='left'>
                                        <ul className="list">
                                            <li className="card-title mb-2 text-muted">{spotlight.description}</li>
                                            <li className="card-text">{spotlight.location}</li>
                                        </ul>
                                    </div>
                                    <div className='list col-md body-align-right' id='right'>
                                        <img src={`http://127.0.0.1:4000/` + `${spotlight.image}`} alt="Industry Logo" className="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                })
            }
            
            {/* <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Scorecard </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
                    <p1><strong>Jane Doe </strong></p1>
                    <Container align="center">

                           
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Jane Doe 
                    </Button>
                </Modal.Footer>
            </Modal> */}
         
        </>
        
    );
}