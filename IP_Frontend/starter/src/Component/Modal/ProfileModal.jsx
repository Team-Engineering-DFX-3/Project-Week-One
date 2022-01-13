import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
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
                    
                        <div >
                            <Modal size="xl" show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Scorecard </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fportrait-smart-male-profile-symbol-portrait-smart-male-profile-symbol-minimal-cartoon-style-image166146967&psig=AOvVaw3udTIUQROPhikHlenVIuUV&ust=1642022483828000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi7hMnQqvUCFQAAAAAdAAAAABAD" alt="User" className="user-picture" />
                        <li><strong>Digital Futures email:</strong>{user[0] ? user.map(user => <div>{user.name}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                        <li><strong>Digital Futures email:</strong>{user[0] ? user.map(user => <div>{user.dfemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                        <li><strong>Digital Futures email:</strong>{user[0] ? user.map(user => <div>{user.dfemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                                    <Container align="center">


                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                     </Button>
                        <Link to="user"> <Button variant="primary" onClick={handleSubmit}>
                            View Full Profile 
                        </Button></Link>
                                    
                                </Modal.Footer>
                            </Modal>
                        </div>
                 
        </>
        
    );
}