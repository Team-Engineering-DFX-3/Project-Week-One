import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';

export default function PortfolioModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Portfolio
            </Button>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Portfolio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please add a link to an external portfolio website
                    <Container align="center">
                        <Table borderless={true}>
                            <tbody>
                                <tr>
                                    <th><Form.Label>Title: </Form.Label></th>
                                    <th><Form.Label>Url: </Form.Label></th>
                                    <th><Form.Label>Description: </Form.Label></th>

                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td><Form.Control type="text" placeholder="Title" /></td>
                                    <td><Form.Control type="url" placeholder="Website Url" /></td>
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