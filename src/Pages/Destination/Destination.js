import React from 'react';
import NavBar from '../Shared/NabBar/NabBar';
import { Col, Container, Row } from 'react-bootstrap';
import DestinationDetails from '../DestinationDetails/DestinationDetails';


const Destination = () => {
    return (
        <section>
            <NavBar />
            <Container className="mt-5">
                <Row>
                    <Col className="my-3" md={5} >
                        <DestinationDetails />
                    </Col>
                    <Col md={6} className="offset-md-1" >
                        <img className="img-fluid " src="https://i.ibb.co/Vp2ymPw/Map.png" alt="Map" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Destination;