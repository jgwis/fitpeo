import React from "react";
import { Link } from "react-router-dom";
import userImage from "../assets/images/user-icon.png";

const UserDetails = () => {
    return(
        <>
        <div className="dropdown user-details">
  <button className="btn dropdown-toggle d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={userImage} alt="userImage" />
    <span>Evano
    <small className="role">Project Manager</small>
    <i className="bi bi-chevron-down"></i>
    </span>
    
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item">Logout</Link></li>
  </ul>
</div>
        </>
    )
}

export default UserDetails;