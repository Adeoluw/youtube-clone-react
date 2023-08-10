import React from 'react'

const Videos = (props) => {
  console.log(props.url)
  return (
    <div className="video-con">
      <video
        src={props.url}
        controls
        poster={props.thumbnail}
      ></video>
      <div className="video-details">
        <div className="channel-img"></div>
        <div className="video-text">
          <h3>{props.title}</h3>
          <p>
            The Modern Show <span className="verified"></span>
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
