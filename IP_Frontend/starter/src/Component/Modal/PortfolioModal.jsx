import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';

export default function PortfolioModal() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const [portfolioData, setPortfolioData] = useState({
        title: ``,
        url: ``,
        description: ``,
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        const { name, value } = e.target;
        setPortfolioData({
            ...portfolioData,
            [name]: value
        });
        console.dir("Portfolio data: " + portfolioData);
    };

    const handleSubmit = async (e) => {
        console.log("entered handle");
        setShow(false);
        e.preventDefault();
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/http://172.31.95.86:4000/editPortfolio', portfolioData);
            console.log('hi');
            alert(response.data.message);
            console.log(response.data.portfolio);
            setPortfolioData(response.data.portfolio);
            navigate('/UserEdit', { state: response.data });

        }
        catch (e) {
            return "failure";
        }
    };

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
                                    <td><Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} /></td>
                                    <td><Form.Control type="url" placeholder="Website Url" name="url" onChange={handleChange} /></td>
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