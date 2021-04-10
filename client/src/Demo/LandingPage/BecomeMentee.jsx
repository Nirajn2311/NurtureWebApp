import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './BecomeMentee.scss';

export default function BecomeMentee() {
    return (
        <>
            <Navbar variant='dark' bg='dark'>
                <Navbar.Brand className='mr-auto'>NURTURE</Navbar.Brand>
                <Nav>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>Become a Mentor</Nav.Link>
                    <Nav.Link>Become a Mentee</Nav.Link>
                    <Nav.Link>Donate</Nav.Link>
                    <Nav.Link>Contact Us</Nav.Link>
                </Nav>
            </Navbar>
            <div className='p-5 text-center' id='apply-btn'>
                <a href='#mentee-form'>
                    <h1>APPLY TO BE A MENTEE</h1>
                </a>
            </div>
            <div className='p-5' id='why-join'>
                <h1 className='mb-5'>WHY YOU SHOULD JOIN US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia porta
                    lorem at condimentum. Etiam nec nunc id nulla rutrum imperdiet. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nam lorem mauris, mollis eget sem a, commodo commodo diam. Quisque quis aliquet
                    sem, a eleifend ex. Donec risus ex, ullamcorper vel quam pulvinar, placerat
                    blandit massa. Vestibulum eu leo et lacus ornare consectetur vitae vitae nulla.
                    Fusce consectetur sodales feugiat. Cras tempor vestibulum interdum. Maecenas ac
                    odio ultrices, dapibus ex id, blandit arcu. Sed id commodo lectus, vitae iaculis
                    nunc. Quisque porttitor nec libero vitae dictum. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla
                    facilisi. Nullam ut diam nisi. Aenean dignissim dolor in sodales elementum.
                    Suspendisse viverra gravida efficitur. Etiam eget libero libero. Praesent vel
                    fermentum dui. Sed pellentesque justo vitae semper ultricies.
                </p>
            </div>
            <Container fluid id='mentee-form' className='p-5'>
                <Form>
                    <Form.Group className='mb-4'>
                        <Form.Label className='h3'>Name</Form.Label>
                        <Form.Row>
                            <Col sm={6}>
                                <Form.Control
                                    className='mb-3'
                                    type='text'
                                    placeholder='First Name'
                                    name='fname'
                                />
                            </Col>
                            <Col sm={6}>
                                <Form.Control
                                    className='mb-3'
                                    type='text'
                                    placeholder='Last Name'
                                    name='lname'
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Label className='h3'>Email</Form.Label>
                        <Form.Control type='email' name='email' />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Label className='h3'>Date of Birth</Form.Label>
                        <Form.Control type='date' name='dob' />
                    </Form.Group>
                    <Link to='/new-landing/mentee-landing'>
                        <Button variant='primary' type='submit' className='mt-4'>
                            REGISTER
                        </Button>
                    </Link>
                </Form>
            </Container>
        </>
    );
}
