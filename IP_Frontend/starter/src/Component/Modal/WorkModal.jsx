import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function WorkModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Work Experience/ positions held
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
                                    <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Experience">
                                                <Dropdown.Item href="#/action-1">Experience</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Position Held</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Work Abroad</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td>
                                    <td><Form.Control type="text" placeholder="Institution name" /></td>
                                    <td><Form.Control type="text" placeholder="Position" /></td>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}