import React from "react";

export default function Trending(props) {
    return (
      <>
        <div className="nav-link">
          {props.icon}
          <p>{props.head}</p>
        </div>
      </>
    );
}