import React from 'react';
// import './App.css';
import Nav from "./components/Nav";
import Side from "./components/side"
import Videos from './components/Videos';

function App() {
// create state for the video urls
  const [getVideos, setGetVideos] = React.useState([])

   React.useEffect(() => {
     fetch("https://developers.google.com/youtube/v3/docs/videos/list#request")
       .then((res) => res.json())
       .then((data) => setGetVideos(data));
   }, []);
  
  console.log(getVideos)
  
 return (
  <div className="App">
    <header className="App-header">
      <Nav />
    </header>
    <main>
      <div className="side-section">
        <Side />
        <Videos />
      </div>
    </main>
  </div>
);
}

export default App;
