import React from 'react';

import './App.css';
import { NavBar } from './Components/NavBar';
import { ExploreTopBooks } from './Pages/HomePage/ExploreTopBooks';
import { Carousel } from './Components/Carousel';

function App() {
  return (
    <div>
      <NavBar />
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  )
}

export default App;
