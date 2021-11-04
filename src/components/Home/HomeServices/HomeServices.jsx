import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const {useService} = useFetch();
    const [services] = useService();

    return (
        <Container className="py-5" id="services">
            <h3 className='text-center py-2'>Our <span className="common-color">Services</span></h3>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    services.map(service => <HomeService
                        key={service.id}
                        service={service}
                    ></HomeService>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;