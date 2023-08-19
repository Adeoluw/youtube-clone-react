import React from 'react';
// import { useMediaQuery } from 'react-responsive';
// import './App.css';
import Nav from "./components/Nav";
import Side from "./components/side"
import Videos from './components/Videos';
import { FaHome, FaList, FaLaptop } from 'react-icons/fa';

function App() {

  // let apiKey = "AIzaSyAAVAJOvPQgGMYfF4v43Z-8vdFYbihFMaI";
// create state for the video urls
  const [getVideos, setGetVideos] = React.useState([])

  React.useEffect(() => {
    // Replace with your YouTube Data API key
    const apiKey = "AIzaSyAAVAJOvPQgGMYfF4v43Z-8vdFYbihFMaI";
    const channelId = "UCDogdKl7t7NHzQ95aEwkdMw"; // Replace with the desired channel ID
      
// https://developers.google.com/youtube/v3/docs/videos/list#request
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=30`)
      .then((response) => response.json())
      .then((data) => {
        const videoList = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          description: item.snippet.description,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        setGetVideos(videoList);
      })
      .catch((error) => console.error("Error fetching YouTube data:", error));
  }, []);
  console.log("sapa")
  

  const allVideos = getVideos.map(item => {
    return <Videos id={item.id} title={item.title} thumbnail={item.thumbnail} url={item.url} description={item.description} />
  })

 return (
   <div className="App">
     <header className="App-header">
       <Nav />
     </header>
     <main>
       <div className="side-section">
         <Side />
       </div>
       <div className="videos">{allVideos}</div>
     </main>
     <footer>
       <div className="footer-nav">
         <div>
           <FaHome className='icons mobile-home' />
           <p>Home</p>
         </div>
         <div>
           <FaList className='icons mobile-sub'/>
           <p>Subscriptions</p>
         </div>
         <div>
           <FaLaptop className='icons mobile-library'/>
           <p>Library</p>
         </div>
       </div>
     </footer>
   </div>
 );
}

export default App;
