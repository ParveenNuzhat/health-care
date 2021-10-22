import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Team.css'

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('./fakeTeamData.json')
            .then(res => res.json())
            .then(data => setTeam(data))
    })
    return (
        <div className='team-banner'>
            <Container className='text-center'>
                <h2 className='pt-4' style={{fontFamily: 'Grand Hotel, cursive', fontSize: '40px', fontWeight: '900', color:'#A7778D' }}>Certified Dentists</h2>
                <p className='w-75 mx-auto py-2' style={{ textAlign: 'center', color: '#666565', fontFamily:'Grand Hotel, cursive'}}>Our staff is trained and skilled, and we strive to provide energetic and fun-loving service to each patient. Each member of our team has years of experience in treating patients with the highest level of care. We strive to stay updated with dental technology and advances by regularly attending continuing education courses and seminars.</p>
                <h4 className='py-2' style={{fontFamily:'Brush Script MT', fontWeight:'600', fontSize:'35px'}}>Meet Our Team</h4>

                <Row md={2} className='g-5 pt-4 pb-5'>
                    {
                        team?.map(dentist =>
                            <div className='team-display d-flex'>
                                <Col className='team-img text-center'>
                                    <Card.Img variant="top" src={dentist?.img} className='w-75 img-fluid' />
                                </Col>
                                <Col className='text-center'>
                                    <Card style={{ width: '22rem' }} className='border-0 team-card'>
                                        <Card.Body className=''>
                                            <Card.Title style={{fontSize:'27px', fontWeight:'700', color:'#3F34A1'}}>{dentist?.name}</Card.Title>
                                            <Card.Text style={{fontFamily:'Montserrat", Sans-serif', color:'#48B58B', fontSize:'18px', fontWeight:'700'}}>{dentist?.designation}</Card.Text>
                                            <Card.Text style={{fontFamily:'FreeMono, monospace', color:'#534B52', fontSize:'16px', fontWeight:'400'}}>{dentist?.feature}</Card.Text>
                                            <Card.Text style={{color:'#B83872'}}><b>Contact: {dentist?.email}</b></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Team;