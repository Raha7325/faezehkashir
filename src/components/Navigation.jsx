import React from "react";
import { NavLink } from "react-router-dom"
import MyPic from "../img/myPicture.png";

const Naigation = () => {
    return (
        <div className="navigation ">
            <nav className="navbar navbar-expand d-block" >
                <div className="p-2 ">
                    <img
                        className="d-block"
                        style={{ "width": "100px", "height": "100px", "objectFit": "cover", "borderRadius": "50%0" }}
                        src={MyPic}
                    />

                </div>
                <ul className="navbar-nav d-block">
                    <li className="nav-item ">
                        <NavLink className="nav-link text-dark" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link text-dark" to="/skills">
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link text-dark" to="/Contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Naigation;