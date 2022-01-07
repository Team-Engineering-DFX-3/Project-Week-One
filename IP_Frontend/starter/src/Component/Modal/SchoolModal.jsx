import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function SchoolModal() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const [schoolData, setSchoolData] = useState({
        school: ``,
        examType: ``,
        subject: ``,
        grade: ``,
        year: ``,
        description: ``
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setSchoolData({
            ...schoolData,
            [name]: value
        });
        console.dir("School data: " + schoolData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:4000/editSchool', schoolData);
            console.log('hi');
            alert(response.data.message);
            console.log(response.data.degree);
            setSchoolData(response.data.degree);
            navigate('/UserEdit', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add School
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>School</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter your school details
                    <Container align="center">
                        <Table borderless={true}>
                            <tbody>
                                <tr>
                                    <th><Form.Label>School: </Form.Label></th>
                                    <th><Form.Label>Exam type: </Form.Label></th>
                                    <th><Form.Label>Subject: </Form.Label></th>
                                    <th><Form.Label>Grade: </Form.Label></th>
                                    <th><Form.Label>Year: </Form.Label></th>
                                    <th><Form.Label>Description: </Form.Label></th>

                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td><Form.Control type="text" placeholder="Institution name" name="school" onChange={handleChange}/></td>
                                    <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Qualification level" name="exam" onChange={handleChange}>
                                                <Dropdown.Item href="#/action-1">A-Level</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">AS-Level</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">IB</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">EB</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">ELTE</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">EPQ</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Esama de Stato</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">HKDSE</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td>
                                    <td><Form.Control type="text" placeholder="Subject" name="subject" onChange={handleChange}/></td>

                                    <td><Form.Control type="text" placeholder="Grade" onChange={handleChange}/></td>
                                    <td><Form.Control type="text" placeholder="Year" name="year"onChange={handleChange}/></td>
                                    <td><Form.Control type="text" placeholder="Description" name="description" onChange={handleChange}/></td>

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