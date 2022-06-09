import React from 'react';
import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import NavBar from '../Shared/NabBar/NabBar';
import { useForm } from "react-hook-form";
import swal from 'sweetalert'

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const messageInfo = {
            userName: data.name,
            userEmail: data.email,
            userMessage: data.message
        }
        swal("This Form not working right now.", "thank you", "error");
        reset()
    };
    return (
        <section>
            <NavBar />

            <main className="container mt-5" >

                <Row  >
                    <Col className=" mx-auto " md={6}>

                        < Form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg">
                            <h3 className=" text-center mb-3 text-muted"> Get In Touch</h3>

                            <FloatingLabel className="mt-3" controlId="floatingInput" label="Name" >
                                <Form.Control name="name" type="name" {...register("name")} placeholder="Name" />
                            </FloatingLabel>
                            <FloatingLabel className="mt-3" controlId="floatingInput" label="Email address" >
                                <Form.Control name="email" type="email" {...register("email")} placeholder="Email address" />
                            </FloatingLabel>
                            <FloatingLabel className="mt-3" controlId="floatingTextarea2" label="Message" >
                                <Form.Control as="textarea" {...register("message")} placeholder="Leave a Message here" style={{ height: '100px' }} />
                            </FloatingLabel>

                            <Button className="btn btn-main border-0 rounded-3 mt-3 form-control text-white" type="submit" > Send </Button>

                        </Form>
                    </Col>
                </Row>

            </main>

        </section >
    );
};

export default Contact;