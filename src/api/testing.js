// import React, { useState, useEffect } from "react";

// const YoutubeAPIExample = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Replace with your YouTube Data API key
//     const apiKey = "YOUR_YOUTUBE_API_KEY";
//     const channelId = "CHANNEL_ID"; // Replace with the desired channel ID

//     fetch(
//       `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=10`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const videoList = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.default.url,
//         }));
//         setVideos(videoList);
//       })
//       .catch((error) => console.error("Error fetching YouTube data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>YouTube Videos</h1>
//       <ul>
//         {videos.map((video) => (
//           <li key={video.id}>
//             <img src={video.thumbnail} alt={video.title} />
//             <a
//               href={`https://www.youtube.com/watch?v=${video.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {video.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YoutubeAPIExample;
