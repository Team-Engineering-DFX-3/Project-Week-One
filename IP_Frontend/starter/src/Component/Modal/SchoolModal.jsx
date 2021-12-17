import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function SchoolModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    <td><Form.Control type="text" placeholder="Institution name" /></td>
                                    <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Qualification level">
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
                                    <td><Form.Control type="text" placeholder="Subject" /></td>

                                    <td><Form.Control type="text" placeholder="Grade" /></td>
                                    <td><Form.Control type="text" placeholder="Year" /></td>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}