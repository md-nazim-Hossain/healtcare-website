import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const {useService} = useFetch();
    const [services] = useService();
    
    return (
        <Container className="py-5" id="services">
            <div className='text-center w-75 py-3 mx-auto'>
                <h1 className='py-2'>All Our <span className="common-color common-font">Services</span></h1>
                <p className="text-muted common-font">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
            </div>
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