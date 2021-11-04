import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-slider mt-5'>
           <Container>
               <Row md={2} sm={2}>
                   <Col>
                        <div className='d-flex justify-content-center align-items-center py-2'>
                            <div className='pb-5'>
                                <h3 className='header-super-title py-5'>INSPIRING BETTER HEALTH</h3>
                                <h1 className='header-title common-color common-font'>Healthy heart,</h1>
                                <h1 className='header-sub-title'>healthy family</h1>
                                <p className='text-muted common-font py-3'>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
                                <Button className='btn-common rounded-pill common-bg mt-2' variant='transparent me-5'>Discover More</Button>
                                <Button variant='dark' className='btn-common rounded-pill mt-2'>View Our Service</Button>
                            </div>
                        </div>
                   </Col>
                   <Col></Col>
               </Row>
           </Container>
        </div>
    );
};

export default Banner;