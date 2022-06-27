import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Shared/NabBar/NabBar';

const About = () => {
    return (
        <>
            <NavBar />
            <Container className="mt-5 pt-5">
                <main className="row g-4">
                    <div className="col-md-4 offset-md-1">
                        <img className="img-fluid rounded-3" src="https://i.ibb.co/TTKGkfR/about.jpg" alt="aboutUs" />
                    </div>
                    <div className="col-md-6 mx-auto">
                        <h2 className="text-muted"> Urban Rider
                        </h2>
                        <p className="mt-4 text-muted text-justify">
                            Urban-Rider is a website of ride share online. The website is built with React, Firebase, React-Router, and React-Bootstrap. And has been used Authentication of Firebase .
                            <br /> If the user clicks on the vehicle icon, the user will be taken to the login page for Sign up or Sign in to view the destination page. Then the user must be Sign up and log in to view the destination page
                        </p>

                    </div>
                </main>
            </Container>
        </>
    );
};

export default About;