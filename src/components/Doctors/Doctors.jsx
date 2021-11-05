import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import doctor1 from '../../images/download (1).jfif';
import doctor2 from '../../images/download (2).jfif';
import doctor3 from '../../images/doctor-3.jpg';
import doctor4 from '../../images/download.jfif';
import doctor5 from '../../images/doctor-5.jpg';
import doctor6 from '../../images/istockphoto-1189304032-612x612.jpg';

const Doctors = () => {
    return (
        <Container className='my-4'>
            <div className='text-center py-5'>
                <h1 className='py-2'>All Our <span className="common-color common-font">Doctors Team</span></h1>
            </div>
            <Row xs={1} sm={2} md={3} className='g-4'>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor1} />
                        <Card.Body>
                        <Card.Title>Dr.Shamsi</Card.Title>
                        <Card.Text>
                           <p>Sergery Specialist of Cardilogy in London</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor2} />
                        <Card.Body>
                        <Card.Title>Dr.Kaira</Card.Title>
                        <Card.Text>
                            <p>Valve Repair Specialist of Cardilogy in USA</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor3} />
                        <Card.Body>
                        <Card.Title>Dr.Hamid Mursed</Card.Title>
                        <Card.Text>
                            <p>PaceMaker Specialist of Cardilogy in Germany</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor4} />
                        <Card.Body>
                        <Card.Title>Dr.Fateme Hamid</Card.Title>
                        <Card.Text>
                            <p>Peripheral artery angioplasty Specialist of Cardilogy in Spain</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor5} />
                        <Card.Body>
                        <Card.Title>Dr.Tony Cruise</Card.Title>
                        <Card.Text>
                            <p>Valve diseases Specialist of Cardilogy in Italy</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={doctor6} />
                        <Card.Body>
                        <Card.Title>Dr.Alishba Khan</Card.Title>
                        <Card.Text>
                            <p>Hard Transpalent Specialist of Cardilogy in USA</p>
                        </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <NavLink to="/appoint"><Button variant="success">Get Appoint</Button></NavLink>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctors;