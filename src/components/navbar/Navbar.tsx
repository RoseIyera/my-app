import './navbar.scss'
import { useState } from 'react';
import {Menu, Close} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Logo from '../../assets/Logo.png'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar: React.FC = () => {
    const [open, setOpen]=  useState<boolean>(false);
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const { logout } = useAuth0();

    //Vendor-Admin Check if the user is authenticated and the email is the specific one
    const isVendorUser = isAuthenticated && user?.email === 'roseiyera@gmail.com';

    const toggleNavBar = () => {
        if(window.innerWidth < 500){
            setOpen(!open);
        }
    };

     const menuStyle = open ? "menu open" : "menu";   

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} className="logo-img" alt="logo" />
        </div>
        <div className="brand">Cake Store</div>
        <div className="hamburger">
            <Menu onClick={toggleNavBar} />
        </div>
        <div className={menuStyle}>
            <ul>
                <Close className="close" onClick={toggleNavBar} />
                <li onClick={toggleNavBar}>
                    <Link to="">Home</Link>
                </li>

                <li onClick={toggleNavBar}>
                    <Link to="">View Products</Link>
                </li>
                
                {/* Admin section */}
                {isVendorUser && (
                <li onClick={toggleNavBar}>
                    <Link to="/products">Products</Link>
                </li>
                )}

                {isVendorUser && (
                <li onClick={toggleNavBar}>
                    <Link to="/products/add">Add Product</Link>
                </li>
                )}

                {isVendorUser && (
                <li>
                    <Link to="">View Customer Orders</Link>
                </li>
                )}

                {/* Customer Section */}
                {!isAuthenticated && (
                <li>
                    <Link to="/order">Order</Link>
                </li>
                )}

                {!isAuthenticated && (
                <li>
                    <Link to="/myorders">View my Orders</Link>
                </li>
                )}

                {/* Authentication */}
                {!isAuthenticated && (
                <li onClick={() => loginWithRedirect()}>
                    <Link to="/login" className='outerBtn'>Login</Link>
                </li>
                )}

                {isAuthenticated && (
                <li onClick={() => logout()}>
                    <Link to="" className='outerBtn'>Logout</Link>
                </li>
                 )}

            </ul>
        </div>
    </div>
  )
}

export default Navbar