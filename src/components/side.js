import React from "react";
import sectionOne from "../Datalist/FirstsectionData";
import sectionTwo from "../Datalist/SecondsectionData";
import HomeSection from "./HomeSection";
import LibrarySection from "./LibrarySection";
import subs from "../Datalist/subsdata"
import Subscrbtion from "./subscribtion";
import trending from "../Datalist/trendingdata";
import Trending from "./Trending";
import moreyoutubedata from "../Datalist/moreyoutubedata";
import More from "./More";


export default function Side() {
  // Mapping the data for the first section of the side section
  const firstSection = sectionOne.map((item) => {
    return <HomeSection key={item.id} icon={item.icon} head={item.head} />;
  });

  // Mapping the data for the first section of the side section
  const secondSection = sectionTwo.map((item) => {
    return <LibrarySection key={item.id} icon={item.icon} head={item.head} />;
  });

  // Mapping the data for the subscribtions of the side section
  const subscrbtions = subs.map((item) => {
    return <Subscrbtion key = {item.id} icon ={item.subIcon} channelName={item.channelName} />;
  });

  // Mapping the data for the trending section of the side section
  const trend = trending.map((item) => {
    return <Trending key={item.id} icon = {item.icon} head={item.head} />;
  });

  // Mapping the data for the trending section of the side section
    const moreYoutube = moreyoutubedata.map(item => {
      return <More key={item.id} name={item.name} icon={item.icon} />
    })

  return (
    <div>
      <section>{firstSection}</section>
      <hr />
      <section>{secondSection}</section>
      <hr />
      <section>
        <h3>Subscribtions</h3>
        {subscrbtions}
      </section>
      <hr />
      <section>
        <h3>Trending</h3>
        {trend}
          </section>
          <hr />
      <section>
        <h3>More from youtube</h3>
        {moreYoutube}
      </section>
    </div>
  );
}