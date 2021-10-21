import React, { useEffect, useState } from 'react';
import './Home.css';
import dentist from '../../Images/dentist.png';
import clinic from '../../Images/clinic.jpg';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <HeaderMain></HeaderMain>
            <Container>
                <h1 className='text-center mt-5'>About Us</h1>
                <div>
                    <Row md={2} className='mt-5 align-items-center mx-auto'>
                        <Col className='text-center'>
                            <img src={dentist} alt="" className='w-75 img-fluid' />
                        </Col>
                        <Col className='text-center'>
                            <Card className='border-0'>
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'Grand Hotel, cursive', fontSize: '30px', fontWeight: '900' }}>Our Vision</Card.Title>
                                    <Card.Title style={{ color: '#fdabb7', fontSize: '50px', fontWeight: '700' }}>A perfect Smile</Card.Title>
                                    <Card.Text style={{ fontSize: '20px' }} className='p-3'>
                                        Our integrated dental care system provides exceptional care.
                                    </Card.Text>
                                    <Card.Text >
                                        <Row md={3} className='px-5' >
                                            <Col>
                                                <p className='about-text'><span style={{ color: 'brown', fontSize: '40px' }}>100%</span><br />Client <br /> Satisfaction</p>
                                            </Col>
                                            <Col>
                                                <p className='about-text'><span style={{ color: 'brown', fontSize: '40px' }}>20</span><br />Great <br />Dentists</p>
                                            </Col>
                                            <Col>
                                                <p className='about-text'><span style={{ color: 'brown', fontSize: '40px' }}>15</span><br />National <br /> Awards</p>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row md={2} className='mt-5 align-items-center mx-auto'>
                        <Col className='text-center'>
                            <Card className='border-0'>
                                <Card.Body>
                                    <Card.Title style={{ fontFamily: 'Grand Hotel, cursive', fontSize: '30px', fontWeight: '900' }}>Equipments and Doctors</Card.Title>
                                    <Card.Text style={{ fontSize: '20px' }} className='p-4'>
                                        Our doctors are highly professional and qualified and all the equipment is specialized. Our goal is to make sure with advances in technology and technique.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='text-center'>
                            <img src={clinic} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </div>

                <div className='text-center mt-3 mb-5'>
                    <h2 className='mt-5 text-center home-title'>Our Dental Services</h2>
                    <Row md={3} className='g-4 mt-3'>
                        {
                            services.slice(0, 6)?.map(service =>
                                <Col>
                                    <Card style={{ width: '22rem' }} className='home-container mx-auto mb-4'>
                                        <Card.Img variant="top" src={service.img} className='home-img' />
                                        <Card.Body className='home-text'>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>
                                                {service.feature}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                    <Link to='/services'>
                        <Button className='mt-5'>View All Services</Button>
                    </Link>

                </div>

            </Container>
        </div>
    );
};

export default Home;