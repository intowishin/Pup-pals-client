import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import logo from "../../images/logo3.png";
import dog from "../../images/dogpeeking2.png";
// import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <>
    <div className="dog">
    <img src={dog} width="375px" alt="dog" />
    </div>
    <nav>
    <div className="logo">
    <img src={logo} width="85px" alt="logo"/>
    </div>
   
      {/* <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP} - created with IronLauncher
      </Link> */}

      <div className="nav__authLinks">
        {props.user ? (
          <>
          <Link to={PATHS.DOGPROFILE} className="authLink">
            Pup Profile
            </Link>
            <Link to={PATHS.USERPROFILE + '/' + props.user._id} className="authLink">
            
            Hooman Profile
            </Link>
            
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
