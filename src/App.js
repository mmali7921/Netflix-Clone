
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { trending, topRated, comedy, horror, romance,action, mystery, sciFi, western, animation, tv, fantasy, family, war, history, music, thriller, crime, drama } from './Components/urls';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <RowPost url={trending} title="Trending" />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={topRated} title="Top Rated" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={drama} title="Drama" isSmall />
      <RowPost url={sciFi} title="Sci-Fi" isSmall />
      <RowPost url={mystery} title="Mystery" isSmall />
      <RowPost url={western} title="Western" isSmall />
      <RowPost url={animation} title="Animation" isSmall />
      <RowPost url={tv} title="TV Movies" isSmall />
      <RowPost url={fantasy} title="Fantasy" isSmall />
      <RowPost url={family} title="Family" isSmall />
      <RowPost url={war} title="War" isSmall />
      <RowPost url={history} title="History" isSmall />
      <RowPost url={music} title="Music" isSmall />
      <RowPost url={thriller} title="Thriller" isSmall />
      <RowPost url={crime} title="Crime" isSmall />

    </div>
  );
}

export default App;
