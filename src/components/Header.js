import React, {useState} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/Bliss-logo.png"


function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="Header">
            <Jumbotron fluid className="mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1><img src={logo} alt="logo" height="100" width="100"/>Bliss</h1>
                            <h2>A Honeymoon Registry</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Navbar dark color="dark" sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand><img src={logo} alt="logo" height="50" width="50"/></NavbarBrand>
                    <NavbarToggler onClick={ toggleNavbar } />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/gifts">
                                    <i className="fa fa-gift fa-lg" /> Gifts
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/destinations">
                                    <i className="fa fa-map fa-lg" /> Destinations
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header