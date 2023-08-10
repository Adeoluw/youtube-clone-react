import React from "react";

export default function Subscrbtion(props) {
    return (
      <>
        <div className="nav-link">
          <div className="youtube-icon-con">{props.icon}</div>
          <p>{props.channelName}</p>
        </div>
      </>
    );
}