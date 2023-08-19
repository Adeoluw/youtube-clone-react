import React from 'react'
import { FaHome, FaList, FaLaptop } from "react-icons/fa";


const Videos = (props) => {
  return (
    <div className="video-con">
      <video src={props.url} controls poster={props.thumbnail}></video>
      {/* <iframe
        title="YouTube Video"
        width="560" // Adjust width and height as needed
        height="315"
        src={props.url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <div className="video-details">
        <div className="channel-img"></div>
        <div className="video-text">
          <div className="text-title">
            <h3>{props.title}</h3>
          </div>
          <p>
            Sidemen <span className="verified"></span>
          </p>
          <p className="views">
            1 view * <span className="days"> 1 Day ago</span>
          </p>
        </div>
      </div>
      <footer>
        <div className="footer-nav">
          <button>
            <FaHome className="icons mobile-home" />
            <p>Home</p>
          </button>
          <button>
            <FaList className="icons mobile-sub" />
            <p>Subscriptions</p>
          </button>
          <button>
            <FaLaptop className="icons mobile-library" />
            <p>Library</p>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Videos
