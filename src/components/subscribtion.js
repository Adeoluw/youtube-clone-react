import React from "react";

export default function Subscrbtion(props) {
    return (
      <>
            <div className="nav-link">
          {/* <i class="fa-solid fa-house fa-xl" style="color: #000000"></i> */}
          <p>{props.channelName}</p>
        </div>
      </>
    );
}