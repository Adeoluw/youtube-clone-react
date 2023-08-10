import React from "react";

export default function More(props) {
    return (
      <>
        <div className="nav-link">
          {props.icon}
          <p>{props.name}</p>
        </div>
      </>
    );
}