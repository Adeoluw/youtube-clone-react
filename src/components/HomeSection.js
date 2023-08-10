import React from "react";
// import { FaHome, Favideo, FaList } from "react-icons/fa";


export default function HomeSection(props) {
    return (
      <>
          <div className="nav-link">
          {props.icon}
          <p>{props.head}</p>
            </div>
      </>
    );
}