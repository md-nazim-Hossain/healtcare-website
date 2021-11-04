import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeService = ({service}) => {
    const{name,img,description} = service;
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
            </Card>
        </Col>
    );
};

export default HomeService;