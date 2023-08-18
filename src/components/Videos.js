import React from 'react'

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
          <div className='text-title'>
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
    </div>
  );
}

export default Videos
