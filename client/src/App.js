import "./App.css";
import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import AlbumGallery from "./components/Albumgallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./components/MyContext";
import galImgGen from "./components/galImgGen";
import albumImageGenerator from "./components/albumImageGenerator";
import Summary from "./components/Summary";
import Company from "./components/Company";

function App() {
  document.body.style = "background: grey";
  const [galleryImages, setGalleryImages] = useState(galImgGen(21));
  const [digitalImages, setDigitalImages] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    setDigitalImages(albumImageGenerator(galleryImages));
  }, [galleryImages]);

  console.log(digitalImages);

  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <MyContext.Provider
          value={{
            galleryContext: [galleryImages, setGalleryImages],
            digitalContext: [digitalImages, setDigitalImages],
            commentContext: [comment, setComment],
          }}
        >
          <Routes>
            <Route path="/company" element={<Company />} />
            <Route path="/" element={<Gallery />} />
            <Route path="/album-gallery" element={<AlbumGallery />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </MyContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
