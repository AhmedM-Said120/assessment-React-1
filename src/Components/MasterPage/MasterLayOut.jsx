import React, { Component } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CopyrightFooter from '../CopyRightFooter/CopyrightFooter';

class MasterLayOut extends Component {
    render() {
        return (
            <>
            <Navbar/>
             <Outlet/>   
             <Footer/>
             <CopyrightFooter/>
            </>
        );
    }
}

export default MasterLayOut;