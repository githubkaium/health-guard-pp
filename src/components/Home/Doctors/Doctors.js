import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect((() => {
        fetch('./doctorsDb.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }), [])

    return (
        <div id="doctors" className="container">
            <h2 className="mt-5 mb-3">Doctors List</h2>
            <div className="row ">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    >
                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;