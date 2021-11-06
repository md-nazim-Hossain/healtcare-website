import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinments.css'

const Appoinments = () => {
    return (
        <Container>
            <Row md={1}>
                <Col>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <p className='py-5'> <span className='header-super-title pb-4'>GET THE RIGHT MEDICAL CARE</span></p>
                            <p className='title'>Book With <span className='header-title common-color common-font'>your doctor </span></p>
                            <p className='text-muted w-50 fs-5'>Some up and coming trends are healthcare consolidation for independent healthcare centers that see a cut in unforeseen payouts.</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row xm={1} sm={1} md={2} className='py-4'>
                <Col xm={4} sm={4} md={4}>
                   <div className='py-5'>
                        <img src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/01/img-box-01.jpg" alt='Doctor Images' className='img-fluid'/>
                   </div>
                   <div>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="fas fa-mobile-alt fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>CALL US ANYTIME</h5>
                               <span>0-800-2336-7820</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="fas fa-map-marker-alt common-color fs-1"></i>
                           </div>
                           <div>
                               <h5>VISIT US ANYTIME</h5>
                               <span>Nova Tower,Mohakhali,Dhaka-1208</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="far fa-heart fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>BOOK AN APPOINTMENT</h5>
                               <span>Click here to book an appointment at Medicare.</span>
                           </div>
                       </p>
                   </div>
                </Col>
                <Col xm={8} sm={8} md={8}>
                    <div className='pt-5 ps-5'>
                        <p className='text-muted text-start border-left ps-2'> red denotes are required</p>
                        <Form>
                            <Form.Group className="mb-4" controlId="formGroupName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control type="text" placeholder="Doctor Name"  className='input-bg p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                                <Form.Label>Select appointment date</Form.Label>
                                <Form.Control type="date" className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                            <Form.Label>Additional Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '120px' }} className='input-bg'
                                />
                            </Form.Group>
                            <Button className='btn-common rounded-pill common-bg mt-2 btn-hover' variant='transparent'>Book Appointment</Button>
                        </Form>
                        <Link to='/doctors'><Button variant='dark' className='mt-2 rounded-pill'>Back to Doctors</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Appoinments;