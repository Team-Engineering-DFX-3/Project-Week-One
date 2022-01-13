import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';

export default function PortfolioModal() {
    const [show, setShow] = useState(false);
    const [spUserData, setSpUserData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getSpUserData = async () => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editUser');
            return response;
        }
        catch (e) {
            return "failure";
        }
    };

    useEffect(() => {
        getSpUserData().then((resp) => {
            if (resp !== "failure" && resp.status === 200) {
                setSpUserData([...resp.data]);
                console.log(resp.data);

            }
        }).catch((err) => {
            throw (err);
        })
    }, []);

    const handleSubmit = () => {
        setShow(false);
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
                        <li><strong>Name:</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.name}<br></br> </div>) : <div >No Name found!</div>} </li>
                        <li><strong>Digital Futures email:</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.dfemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                        <li><strong>Personal Email :</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.pemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                        <li><strong>Digital Futures email:</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.pemail}<br></br> </div>) : <div >No Digital Futures email found!</div>} </li>
                        <li><strong>LinkedIn :</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.linkedin}<br></br> </div>) : <div >No LinkedIn found!</div>} </li>
                        <li><strong>Github:</strong>{spUserData[0] ? spUserData.map(spUserData => <div>{spUserData.github}<br></br> </div>) : <div >No Github found!</div>} </li>
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