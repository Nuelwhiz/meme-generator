import "../App.css";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "we are open ",
    bottomText: "gues what guys",
    imgUrl: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  function changeTop(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  /* useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []); */
  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((resp) => {
      setAllMemes(resp.data.data.memes);
    });
  }, []);

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((preve) => ({
      ...preve,
      imgUrl: newMemeUrl,
    }));
  }

  return (
    <>
      <main className="main-meme">
        <div className="main-meme-input-container">
          <div className="top-text-container">
            <label htmlFor="top">Top text</label>

            <input
              type="text"
              id="top"
              name="topText"
              placeholder="type your wish"
              onChange={changeTop}
              value={meme.topText}
            />
          </div>
          <div className="bottom-text-container">
            <label htmlFor="bottom">Bottom text</label>

            <input
              type="text"
              placeholder="inpute a contents"
              id="bottom"
              name="bottomText"
              onChange={changeTop}
              value={meme.bottomText}
            />
          </div>
        </div>
        <div className="new-meme-btn-container">
          <button className="get-meme" onClick={getMeme}>
            Get meme
          </button>
        </div>
        <div
          className="meme-image-container"
          style={{ backgroundImage: `url(${meme.imgUrl})` }}
        >
          <div>
            <h3>{meme.topText}</h3>
          </div>
          <div>
            <h3>{meme.bottomText}</h3>
          </div>
        </div>
      </main>
    </>
  );
}
