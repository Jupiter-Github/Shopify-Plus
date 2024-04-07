import React, { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import webLogo from "./webLogo.gif";
import {
  Button,
  Badge,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginStatus } from "../Redux/EcomActions";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [showModel, setShowModal] = useState(false);
  const [badgeValue, setBadgeValue] = useState(0);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  useEffect(() => {
    setBadgeValue(cartData.length);
  }, [cartData]);

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(setLoginStatus(false));
    } else setShowModal(!showModel);
  };

  const toggleShowModal = () => {
    setShowModal(!showModel);
  };

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar fixed="top" color="light" expand="md">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={webLogo}
            style={{
              height: 30,
              width: 30,
            }}
          />
          Shopify Plus
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse className="ml-auto" isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-md-none d-sm-block mb-2 ">
              <Link to="/Cart">
                <Button color="primary" outline>
                  Cart <Badge color="primary">{badgeValue}</Badge>
                </Button>
              </Link>
            </NavItem>
            <NavItem className="d-md-none d-sm-block">
              <Button size="sm" color="primary" onClick={handleClick} outline>
                {isLoggedIn ? "LogOut" : "Login"}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
        <div className=" d-none d-md-flex ">
          <Link to="/Cart">
            <Button className="me-1" color="primary" outline>
              Cart <Badge color="primary">{badgeValue}</Badge>
            </Button>
          </Link>
          <Button color="primary" onClick={handleClick}>
            {" "}
            {isLoggedIn ? "LogOut" : "Login"}
          </Button>
          {showModel && <LoginModal toggleShowModal={toggleShowModal} />}
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
