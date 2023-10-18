import React from "react";
import icon from "../assets/images/icon1.jpg";
import { useHeader } from "../pages/HeaderContext";

const Header = () => {

    const { toggleSidebar, isOverlayVisible } = useHeader();
  

    return (
        <>
            {isOverlayVisible && <div className="overlay"></div>}
            <div className="header">
                <div className="d-flex justify-content-between m-onleline">
                    <div className="d-flex align-items-center">
                    <div className="nav-icon" onClick={toggleSidebar}><i className="bi bi-filter-right"></i></div>
                    <p>Hello Shahrukh <img src={icon} alt="icon" />,</p>
                    </div>
                    <div className="p-search">
                        <i className="bi bi-search"></i>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>

            </div>

        </>

    )
}

export default Header;