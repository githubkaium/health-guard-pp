import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, img, expertize } = doctor;
    return (
        <div className="doctor col-lg-4 col-sm-6 col-12">
            <div className="my-2">
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <h5>{expertize}</h5>
        </div>
    );
};

export default Doctor;