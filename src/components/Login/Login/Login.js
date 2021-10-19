import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2 className="mt-5 mb-3">Please Login before Appointment</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input className="btn-regular bg-warning my-3" type="submit" value="Submit" />
                    <p>new to Health Guard? <Link to="/register">Create Account</Link></p>
                    <div>--------------or--------------</div>
                </form>
                <button className="btn-regular bg-warning mb-3" onClick={signInUsingGoogle}>Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;