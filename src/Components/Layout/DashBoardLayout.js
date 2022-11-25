import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import useAdmin from '../../Hooks/useAdmin';
import useShared from '../../Hooks/useShared';
import Footer from '../Shard/Footer';
import Navbar from '../Shard/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isShared] = useShared(user?.email)
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            (isShared || isAdmin ) && <>
                                <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                            </>
                        }
                        <li><Link to="/dashboard">My Booking</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">Buyers & Sellers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;