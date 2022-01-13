import React from 'react'
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function DegreeModal({ setUserData, userData }) {
    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };

    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    const [show, setShow] = useState(false);
    // const [institutionValue, setInstitutionValue] = useState('')
    // const [subjectValue, setSubjectValue] = useState('')
    // const [degreeDetails, setDegreeDetails] = useState('')
    const navigate = useNavigate();
    const [degreeData, setDegreeData] = useState({
        institution: ``,
        subject: ``,
        level: ``,
        grade: ``,
        dateFrom: ``,
        dateTo: ``,
        description: ``
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleChange = e => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
        console.dir("User data: " + userData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/editDegree', degreeData);
            console.log('hi');
            alert(response.data.message);
            console.log(response.data.degree);
            setDegreeData(response.data.degree);
            navigate('/UserEdit', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Degree
            </Button>

            {/* <p>{degreeData}</p> */}

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Degree</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enter your degree details
                    <Container align="center">
                        <Table borderless={true}>
                            <tbody>
                                <tr>
                                    <th><Form.Label>University: </Form.Label></th>
                                    <th><Form.Label>Degree subject: </Form.Label></th>
                                    <th><Form.Label>Degree level: </Form.Label></th>
                                    <th><Form.Label>Grade: </Form.Label></th>
                                    <th><Form.Label>Date from: </Form.Label></th>
                                    <th><Form.Label>Date to: </Form.Label></th>
                                    <th><Form.Label>Description: </Form.Label></th>

                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    {/* <td><Form.Control required type="text" placeholder="Institution name" onChange={this.handleChange} /></td> */}
                                    <td><Form.Control required type="text" placeholder="Institution name" name="institution" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="English" name="subject" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="Bachelors" name="level" onChange={handleChange} /></td>
                                    <td><Form.Control type="text" placeholder="2:1" name="grade" onChange={handleChange} /></td>
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
            </Modal >
        </>
    );

}
