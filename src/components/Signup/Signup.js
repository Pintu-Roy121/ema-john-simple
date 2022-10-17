import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignUp = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Please Enter at least 6 Characters')
            return;
        }

        if (password !== confirm) {
            setError('Your password does not Match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                navigate('/')
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Name: </label>
                    <input type="name" name="name" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />

                {
                    <h3 className='error-text'>{error}</h3>
                }
            </form>
            <p className='create-btn'>Already have an Account? <Link to='/login' style={{ textDecoration: 'none' }}><span className='account-text'>Login</span></Link></p>
            <div className='or-line'>
                <hr className='hr-line' /> or <hr className='hr-line' />
            </div>
            <input className='google-btn' type="submit" value="" />
        </div>
    );
};

export default Signup;