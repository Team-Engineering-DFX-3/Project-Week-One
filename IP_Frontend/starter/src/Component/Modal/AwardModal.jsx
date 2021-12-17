import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function AwardModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    <td>
                                        <Dropdown >
                                            <DropdownButton id="dropdown-basic-button" title="Please choose one">
                                                <Dropdown.Item href="#/action-1">Certificate</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Award</Dropdown.Item>
                                            </DropdownButton>
                                        </Dropdown></td>
                                    <td><Form.Control type="text" placeholder="Issuer" /></td>
                                    <td><Form.Control type="text" placeholder="Award" /></td>
                                    <td><Form.Control type="text" placeholder="Grade" /></td>
                                    <td><Form.Control type="date" placeholder="Date Awarded" /></td>
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