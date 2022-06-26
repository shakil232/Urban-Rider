import React, { useRef } from 'react';
import { Col, FloatingLabel, Form, Row, Button, Container } from 'react-bootstrap';
import NavBar from '../Shared/NabBar/NabBar';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';



const Contact = () => {
    const form = useRef();

    // email-handler 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_az16bjh', 'template_0ah5245', form.current, 'user_tbFNuorI3og0UJCyvUeAH')
            .then(res => {
                swal({
                    title: "Your Message Send Successfully",
                    text: "Thank You",
                    icon: "success",
                    button: "ok",
                });

            },
                (error) => {
                    swal({
                        title: `${error.text}`,
                        text: "Sorry! Try Again",
                        icon: "error",
                        button: "ok",
                    });
                });

        e.target.reset()
    };


    return (
        <>
            <NavBar />
            <Container className=" mt-5" >
                
                <Form className="mt-3 p-3" ref={form} onSubmit={sendEmail} >
                    <Row className="g-3 border border-muted p-3">
                        <div className="text-center">
                            <h3 className="mb-3 text-muted"> Get In Touch</h3>
                        </div>
                        <Col className="mx-auto " sm={12} md={6} >
                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Your name" >
                                <Form.Control type="text" name="user_name" placeholder="Your name" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Email address" >
                                <Form.Control type="email" name="user_email" placeholder="Email address" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Subject" >
                                <Form.Control type="text" name="subject" placeholder="Subject" required />
                            </FloatingLabel>

                            <FloatingLabel className="mb-2" controlId="floatingTextarea2" label="Message">
                                <Form.Control type="text" name="message" as="textarea" placeholder="Message" style={{ height: '100px' }} required />
                            </FloatingLabel>

                            <Button className='form-control my-3 btn-main border-0 rounded-3' type="submit" >
                                Send
                            </Button>
                        </Col>
                    </Row>


                </Form>






            </Container>
        </ >
    );
};

export default Contact;