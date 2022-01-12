import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';

export default function WorkModal() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const [workData, setWorkData] = useState({
        experience: ``,
        institution: ``,
        position: ``,
        dateFrom: ``,
        dateTo: ``,
        description: ``
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setWorkData({
            ...workData,
            [name]: value
        });
        console.dir("Degree data: " + workData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/editWork', workData);
            console.log('hi');
            alert(response.data.message);
            console.log(response.data.degree);
            setWorkData(response.data.degree);
            navigate('/UserEdit', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Work Experience/ Positions Held
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Work Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter your work experience/ previous positions held
                    <Container align="center">
                        <Table borderless={true}>
                            <tbody>
                                <tr>
                                    <th><Form.Label>Type: </Form.Label></th>
                                    <th><Form.Label>Employer or other organization: </Form.Label></th>
                                    <th><Form.Label>Position: </Form.Label></th>
                                    <th><Form.Label>From: </Form.Label></th>
                                    <th><Form.Label>To: </Form.Label></th>
                                    <th><Form.Label>Description: </Form.Label></th>

                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    {/* <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Experience" name="experience" onChange={handleChange}>
                                                <Dropdown.Item href="#/action-1">Experience</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Position Held</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Work Abroad</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td> */}
                                    <td><Form.Control type="text" placeholder="Experience" name="experience" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Institution name" name="institution" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Job title" name="position" onChange={handleChange} /></td>
                                    <td><Form.Control type="date" placeholder="Starting date" name="dateFrom" onChange={handleChange} /></td>
                                    <td><Form.Control type="date" placeholder="End date" name="dateTo" onChange={handleChange} /></td>
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