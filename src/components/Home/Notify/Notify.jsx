import React from 'react';
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
import notifyimg from '../../../images/img-gallery-07.jpg';

const Notify = () => {
    return (
        <Row xs={1} sm={1} md={2} className='w-100'>
            <Col>
                <Container className='ps-5'>
                    <div>
                        <p className='py-5'> <span className='header-super-title pb-4'>GET THE NOTIFICATION</span></p>
                        <p className='title'>We have some <span className='header-title common-color common-font'>Good news</span></p>
                        <p className='text-muted fs-4'>Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.</p>
                    </div>
                    <Form>
                        <Row xs={1} sm={1} md={2}>
                            <Col md={8}>
                                <Form.Control type="email" placeholder="Type in your email address" required className='input-bg p-2 ps-4 rounded-pill mt-2'/>
                            </Col>
                            <Col md={4}>
                                <Button className='btn-common rounded-pill common-bg mt-2 me-2 btn-hover' variant='transparent'>Subscriber</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Col>
            <Col>
                <div className='pt-5 mt-2'>
                    <img src={notifyimg} alt="" className='img-fluid'/>
                </div>
            </Col>
        </Row>
    );
};

export default Notify;