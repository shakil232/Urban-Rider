import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import './DestinationDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBus, faCarSide, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { Timeline, TimelineBlip } from 'react-event-timeline'


const DestinationDetails = () => {
    const [searchText, setSearchText] = useState({
        pickFrom: '',
        pickTo: ''
    });
    const [search, setSearch] = useState(false);

    // handelBlur 
    const handelBlur = e => {
        const destinationInfo = { ...searchText }
        destinationInfo[e.target.name] = e.target.value;
        setSearchText(destinationInfo)
    }

    return (
        <>
            <main className="gray-bg">
                {
                    search ?
                        // show-details 
                        <div className="p-4">
                            {/* location  */}

                            <div className="orange-bg p-2 rounded-3">
                                <Timeline>

                                    <TimelineBlip className="text-white"
                                        style={{ fontWeight: '700', fontSize: '15px' }}
                                        title={searchText.pickFrom}
                                        iconStyle={{ marginLeft: 1, marginTop: 0 }}
                                        iconColor="white"
                                    />

                                    <TimelineBlip className="text-white"
                                        style={{ fontWeight: '700', fontSize: '15px' }}
                                        title={searchText.pickTo}
                                        iconStyle={{ marginLeft: 1, marginTop: 0 }}
                                        iconColor="white"
                                    />

                                </Timeline>

                            </div>

                            <div className="my-2 ">
                                {/* car  */}
                                <div className="d-flex justify-content-between align-items-center rounded-3 bg-white">
                                    <div className="d-flex justify-content-center mt-3 ms-3" >
                                        <h5> <FontAwesomeIcon className="text-info" icon={faCarSide} /></h5>
                                        <h5 className="text-secondary mx-3">Car</h5>
                                        <p className="text-secondary"> <FontAwesomeIcon className="me-1" icon={faUserGroup} />4</p>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 me-3">
                                        <h5 className="text-secondary">$50</h5>
                                    </div>
                                </div>

                                {/* bike  */}
                                <div className="d-flex justify-content-between align-items-center mt-2 rounded-3 bg-white">
                                    <div className="d-flex justify-content-center mt-3 ms-3" >
                                        <h5> <FontAwesomeIcon className="text-info" icon={faMotorcycle} /></h5>
                                        <h5 className="text-secondary mx-3">Bike</h5>
                                        <p className="text-secondary"> <FontAwesomeIcon className="me-1" icon={faUserGroup} />1</p>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 me-3">
                                        <h5 className="text-secondary">$20</h5>
                                    </div>
                                </div>

                                {/* bus  */}
                                <div className="d-flex justify-content-between align-items-center rounded-3 mt-2 bg-white">
                                    <div className="d-flex justify-content-center mt-3 ms-3" >
                                        <h5> <FontAwesomeIcon className="text-info" icon={faBus} /></h5>
                                        <h5 className="text-secondary mx-3">Bus</h5>
                                        <p className="text-secondary"> <FontAwesomeIcon className="me-1" icon={faUserGroup} />10</p>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 me-3">
                                        <h5 className="text-secondary">$10</h5>
                                    </div>
                                </div>
                            </div>

                            <Button className="mt-3 form-control btn-main border-0" onClick={() => setSearch(!search)}  > Back To Search</Button>
                        </div>

                        :
                        // search-location 
                        < Form className="p-4">
                            <FloatingLabel className="mt-" controlId="floatingInput" label="Pick From" >
                                <Form.Control type="text" name="pickFrom" onBlur={handelBlur} placeholder="Pick From" />
                            </FloatingLabel>
                            <FloatingLabel className="mt-3" controlId="floatingInput" label="Pick To" >
                                <Form.Control type="text" name="pickTo" onBlur={handelBlur} placeholder="Pick To" />
                            </FloatingLabel>

                            <Button className="mt-3 form-control btn-main border-0" onClick={() => setSearch(!search)} > Search </Button>

                        </Form>

                }

            </main>
        </>
    );
};

export default DestinationDetails;