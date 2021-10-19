import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, fee, img } = service;
    return (
        <div className="service m-3 pb-3">
            <div>
                <img height={250} src={img} alt="" />
            </div>
            <h3 className="mt-3 py-2 bg-white">{name}</h3>
            <h6 className="text-white">Fee : {fee}</h6>
            <Link to={`/appointment/${description}`}>
                <button className="btn-warning">Appointment</button>
            </Link>
        </div>
    );
};

export default Service;