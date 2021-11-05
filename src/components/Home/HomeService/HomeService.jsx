import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HomeService = ({service}) => {
    const{id,name,img,description} = service;
    const link = `/service/${id}`;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        description
                    }
                </Card.Text>
                </Card.Body>
               <div className='w-50 mx-auto py-3'>
                    <NavLink to={link}><Button variant="success" >More Details</Button></NavLink>
               </div>
            </Card>
        </Col>
    );
};

export default HomeService;