import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location);
    let from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>LogIn</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Log in" />
                {/* {
                    error ? <h3 className='error-text'>{error}</h3>
                        :
                        <h3 className='success-text'>{success}</h3>
                } */}
            </form>
            <p className='create-btn'>New to Ema-John? <Link to='/signup' style={{ textDecoration: 'none' }}><span className='account-text'>Create New Account</span></Link></p>
            <input className='google-btn' type="submit" value="" />
        </div>
    );
};

export default Login;