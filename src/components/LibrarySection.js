import React from "react";

export default function LibrarySection(props) {
    return (
      <>
        <div className="nav-link">
          {props.icon}
          <p>{props.head}</p>
        </div>
      </>
    );
}