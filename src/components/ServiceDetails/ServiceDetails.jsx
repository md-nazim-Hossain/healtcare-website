import React, { useEffect,useState } from 'react';
import { Card,Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ServiceDetails = () => {
    const[details,setDetails] = useState([]);
    const[detail,setDetail] = useState({});

    const {id} = useParams();
    
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);

    useEffect(() =>{
        if(details.length > 0){
            const matched = details.find(del => del.id===id);
            setDetail(matched)
        }
    },[details]);

    const {img,price,name,description,detailsInfo} = detail;
    return (
        <Container className='py-5'>
            <Row>
                <Col>
                    <Card className="h-100 text-center">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <p>{description}</p>
                                <p>{detailsInfo}</p>
                                 <h5 className='common-color'>Treatment Cost:${price}</h5>
                            </Card.Text>
                        </Card.Body>
                        <div className='w-50 mx-auto py-3'>
                            <HashLink to='/home#services'>
                                <Button variant="dark" className='me-2'>Back To Services</Button>
                            </HashLink>
                            <NavLink to='/appoint'>
                                <Button variant='danger'>Book Appointment</Button>
                            </NavLink>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;