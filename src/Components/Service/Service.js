import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, title, img, feature } = props.service;
    
    return (
        <div>
            <Col className='service-container'>
                <Card style={{ width: '37rem' }} className='shadow-lg rounded mx-auto my-4 service-card border-0'>
                    <Card.Img variant="top" src={img} className='service-img w-75 mx-auto p-4' />
                    <Card.Body className='service-info text-center'>
                        <Card.Title style={{ color: 'blue' }}>{title}</Card.Title>
                        <Card.Text className='p-2'><b> <span style={{ color: 'orange' }}>{feature}</span></b></Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-end'>
                        <Link to={`/serviceDetail/${id}`} >
                            <Button>See Details</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;