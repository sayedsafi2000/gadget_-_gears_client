import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import { FaUserCircle } from 'react-icons/fa';
const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
        navigate("/")

    }
    const menuItem = <React.Fragment>
        {user?.uid ?
            <>
                <li><button className='font-bold' onClick={handleLogout}>Sign Out</button></li>
                <li><Link className='font-bold' to="/dashboard">Dashboard</Link></li>

            </>
            :
            <li><Link className='font-bold' to="/login">Login</Link></li>
        }
        <li><Link className='font-bold' to="/blog">Blog</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-200 mb-10">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className=" w-[60px] mr-5 normal-case text-xl"><img src="logo.jpg" alt="" /></Link>
                <Link to="/" className=" normal-case text-xl font-bold">Gadget & Gears</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;