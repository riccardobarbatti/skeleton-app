import React from 'react';
import './App.css';
import SkeletonCss from "./components/SkeletonCss";
import YouTube from "./components/YouTube/index";
import Wave from "./components/Wave";

function App() {
  return (
    <div className="container">
        <SkeletonCss />
        <div className="containerC">
            <YouTube />
            <Wave />
        </div>
    </div>
  );
}

export default App;
