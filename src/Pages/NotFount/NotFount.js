import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/error.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


const NotFount = () => {
    return (
        <section className="mt-3">
            <img className="img-fluid" src={Error} alt="error" />
            <div className="text-center">
                <Link to="/" className="p-2 btn btn-main text-white rounded-3 border-0 mt-4">
                    <FontAwesomeIcon className="me-1" icon={faArrowLeftLong} />   Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFount;