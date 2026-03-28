import { useState } from "react";
import Meme from "/src/images/meme-icon.png";
import Main from "./side-effect/main";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <header className="header">
          <div>
            <img className="meme-icon" src={Meme} alt="" />
            <p className="mem-header">Meme Generator</p>
          </div>
        </header>
        <div>
          <Main />
        </div>
      </main>
    </>
  );
}

export default App;
