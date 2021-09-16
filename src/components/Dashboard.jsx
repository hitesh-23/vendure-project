import React, { useState } from 'react'
import './dashboard.css' 
import Dash from './Dash';
import Products from './Products';

const Dashboard = () => {


    const [isDashOpen, setIsDashOpen] = useState(true);


    return (
        <div className="dashboard-page">
            <header className="header">
                <img className="logoimg" src="https://demo.vendure.io/admin/assets/logo-75px.png" alt="logo"></img>
                <p className="adminright"><i class="fa-regular fa-user"></i>Admin Dropdown</p>
            </header>
            <header className="parttwo">
            <p className="pager">Dashboard</p>
            </header>


            <div className="sidebar">
                <div className="catalog-container">
                <p className="catalog">Catalog</p>
                <ul>
                    <li><a className="sb" href="#">Products</a></li>
                    <li><a className="sb" href="#">Facets</a></li>
                    <li><a  className="sb" href="#">Collections</a></li>
                    <li><a href="#" className="sb">Assets</a></li>
                </ul>
                </div>

                <div className="sales-container">
                <p className="sales">Sales</p>
                <ul>
                    <li>Orders</li>
                    
                </ul>
                </div>

                <div className="customers-container">
                <p className="catalog">Customers</p>
                <ul>
                    <li>Customers</li>
                    <li>Customer groups</li>
                </ul>
                </div>

                <div className="catalog-container">
                <p className="catalog">Marketing</p>
                <ul>
                    <li>promotions</li>
                </ul>
                </div>

                <div className="catalog-container">
                <p className="catalog">Settings</p>
                <ul>
                    <li>Channels</li>
                    <li>Administrators</li>
                    <li>Roles</li>
                    <li>Shipping Methods</li>
                    <li>Payment Methods</li>
                    <li>Tax categories</li>
                    <li>Tax Rates</li>
                    <li>Countires</li>
                    <li>Zones</li>
                    <li>Global settings</li>
                </ul>
                </div>

                <div className="customers-container">
                <p className="catalog">System</p>
                <ul>
                    <li>Job queue</li>
                    <li>System Status</li>
                </ul>
                </div>

            </div>
            <div className="dikhao">
                 {
                    isDashOpen && <Products></Products>
                 }

                   </div>
            
        </div>
    )
}

export default Dashboard
