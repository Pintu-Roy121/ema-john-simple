import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?

                        < Link onClick={logOut} to='/login'>Log out</Link>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign up</Link>
                        </>
                }
                <Link to='/'>{user?.email}</Link>
            </div>

        </nav >
    );
};

export default Header;