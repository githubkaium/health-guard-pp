import React from 'react';
import { useParams } from 'react-router';
import './Appointment.css';

const Appointment = () => {
    const { serviceId } = useParams();
    return (
        <div className="appointment">
            <h6 className="text-primary"><span className="text-danger">Service details:</span> {serviceId}</h6>
        </div>
    );
};

export default Appointment;