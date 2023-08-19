import  React from "react"
import logo from "./youtube-logo.png"
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaMicrophoneAlt, FaChromecast, FaBell } from "react-icons/fa";



export default function Nav(props) {


  return (
    <nav>
      <div className="horizontal-nav">
        <div className="toggle-vertical">
          <div className="open-menu" onClick={props.openclose}>
            <FaBars className="icons bars" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="search-section">
          <div className="search">
            <form action="">
              <input type="text" placeholder="Search..." />
              <button className="search-button">
                <FaSearch className="icons search-icon" />
              </button>
            </form>
          </div>
          <div className="mic">
            <FaMicrophoneAlt className="icons microphone" />
          </div>
        </div>
        <div className="account-details">
          <FaChromecast className="icons chrome-cast" />
          <FaBell className="icons bell" />
          <FaSearch className="icons search-mobile" />
          {/* <i className="fa-regular fa-bell fa-xl" style="color: #000000"></i> */}
          <div className="account-icon">A</div>
        </div>
      </div>
    </nav>
  );
}