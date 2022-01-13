import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AwardModal() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const [awardData, setAwardData] = useState({
        type: ``,
        issuer: ``,
        award: ``,
        grade: ``,
        dateAwarded: ``,
        description: ``
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setAwardData({
            ...awardData,
            [name]: value
        });
        console.dir("Award data: " + awardData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editAward', awardData);
            console.log('hi');
            alert(response.data.message);
            console.log(response.data.award);
            setAwardData(response.data.award);
            navigate('/UserEdit', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Certificate/Award
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Certificates and Awards</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter your Certificate or Award gained
                    <Container align="center">
                        <Table borderless={true}>
                            <tbody>
                                <tr>
                                    <th><Form.Label>Type: </Form.Label></th>
                                    <th><Form.Label>Issuer: </Form.Label></th>
                                    <th><Form.Label>Award: </Form.Label></th>
                                    <th><Form.Label>Grade: </Form.Label></th>
                                    <th><Form.Label>Date Awarded: </Form.Label></th>
                                    <th><Form.Label>Description: </Form.Label></th>

                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    {/* <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Please choose one" name="Type" onChange={handleChange}>
                                                <Dropdown.Item href="#/action-1">Certificate</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Award</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td> */}
                                    <td><Form.Control type="text" placeholder="Award or Certificate" name="Type" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Issuer" name="issuer" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Award" name="award" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Grade" name="grade" onChange={handleChange} /></td>
                                    <td><Form.Control type="date" placeholder="Date Awarded" name="dateAwareded " onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Description" name="description" onChange={handleChange} /></td>

                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}