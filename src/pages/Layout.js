import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Logo from "../components/Logo";
import LeftNavBar from "../components/LeftNavBar";
import UserDetails from "../components/UserDetails";
import { HeaderContext } from "./HeaderContext";

const Layout = () => {
    const { isActiveSidebar } = useContext(HeaderContext);
    return (
        <>
            <div className="wrapper d-flex justify-content-left">
                <div className={`left-panel ${isActiveSidebar ? 'active' : ''}`}>
                    <Logo />
                    <LeftNavBar />
                    <UserDetails />
                </div>
                <div className="right-panel">
                    <Header />
                    <div className="right-inner-panel">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout;