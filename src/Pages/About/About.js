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
                        <img className="img-fluid " src="https://i.ibb.co/346j4jp/urban-about.jpg" alt="aboutUs" />
                    </div>
                    <div className="col-md-6 m-auto">
                        <h2 className="text-muted"> Urban Rider
                        </h2>
                        <p className="mt-4 text-muted text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi libero non sapiente odio fugit alias inventore quisquam dolorum assumenda explicabo adipisci vero, deserunt a in incidunt. Ex officiis necessitatibus aliquid ducimus libero velit illum ab voluptas aut vero! Rem, reprehenderit culpa, ducimus molestias nemo tempore ea unde praesentium vel quibusdam voluptate, obcaecati accusamus assumenda. Dolores temporibus natus deserunt ea sit.
                        </p>

                    </div>
                </main>
            </Container>
        </>
    );
};

export default About;