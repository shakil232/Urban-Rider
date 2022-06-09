import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
    const { name, image } = service;

    return (
        <div className="col-md-3">
            <Link to="/destination" className="text-decoration-none">
                <div className="p-2 shadow rounded-3 card ">
                    <div className="text-center">
                        <img className="w-50 " src={image} alt="serviceIcon" />
                    </div>
                    <div className="card-body">
                        <h5 className="mt-3 text-center text-white">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServicesCard;