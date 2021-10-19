import React from 'react';
import './AboutUs.css';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {

    return (
        <div className="about">
            <Container fluid className='p-4'>
                <Row className='p-2'>
                    <Col>
                        <Row className='p-2'>
                            <Col className='pb-4 pe-3'>
                                <h5>We have highly trained and experienced Doctors where they served their worked area long time</h5>
                            </Col>
                            <Col>
                                <h5>We have latest equipments and many others facilities for patient</h5>
                            </Col>
                        </Row>

                        <Row className='p-2'>
                            <Col>
                                <h5>We have specialist in various area so no worry about</h5>
                            </Col>
                            <Col>
                                <h5>Our Nursing facilities are higher class so you will get your comfort area</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;