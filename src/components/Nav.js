import  React from "react"
import logo from "./youtube-logo.png"
import { FaSearch, FaViadeoSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";


export default function Nav() {
  
  return (
        <nav>
            <div className="horizontal-nav">
        <div className="toggle-vertical">
          <div className="open-menu">
          <FaBars className="icons bars"/>
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
              <FaSearch className="icons search" />
              </button>
            </form>
          </div> 
          <div className="mic">
          <FaMicrophoneAlt className="icons microphone" />
          </div>
        </div>
        <div className="account-details">
          <FaViadeoSquare />
          {/* <i className="fa-regular fa-bell fa-xl" style="color: #000000"></i> */}
          <div className="account-icon"><p>A</p></div>
        </div>
      </div>
        </nav>
    )
}