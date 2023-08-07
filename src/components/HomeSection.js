import React from "react";

export default function HomeSection(props) {
    return (
      <>
          <div className="nav-link">
            {/* <i class="fa-solid fa-house fa-xl" style="color: #000000"></i> */}
            <p>{props.head}</p>
            </div>
      </>
    );
}