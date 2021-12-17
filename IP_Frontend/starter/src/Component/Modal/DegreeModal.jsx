import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function DegreeModal() {
    // constructor(props) {
    //     super(props);
    //     this.state = { value: '' };

    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    const [show, setShow] = useState(false);
    const [institutionValue, setInstitutionValue] = useState('')
    const [subjectValue, setSubjectValue] = useState('')
    const [degreeDetails, setDegreeDetails] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        setShow(false);
        // console.log(event.target.elements.institution.value) // from elements property 
        setDegreeDetails(institutionValue + " " + subjectValue)
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add degree
            </Button>

            <p>{degreeDetails}</p>

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
                                    <td><Form.Control required type="text" placeholder="Institution name" onChange={e => setInstitutionValue(e.target.value)} /></td>
                                    <td><Form.Control type="text" placeholder="Subject name" onChange={e => setSubjectValue(e.target.value)} /></td>
                                    <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Degree level">
                                                <Dropdown.Item href="#/action-1">Bachelors</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Masters</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Phd</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Certificate of higher education</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td>
                                    <td><Form.Control type="text" placeholder="Grade" /></td>
                                    <td><Form.Control type="date" placeholder="Starting date" /></td>
                                    <td><Form.Control type="date" placeholder="End date" /></td>
                                    <td><Form.Control type="text" placeholder="Description" /></td>

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