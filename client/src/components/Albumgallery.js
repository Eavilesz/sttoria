import React, { useContext, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";

const AlbumGallery = () => {
  let navigate = useNavigate();
  const { galleryContext } = useContext(MyContext);
  const { digitalContext } = useContext(MyContext);
  const [galleryImages, setGalleryImages] = galleryContext;
  const [digitalImages, setDigitalImages] = digitalContext;
  const maxAlbumPhotos = 3;

  const howManyChecked = digitalImages.filter(
    (val) => val.status === true
  ).length;

  const selectedAlbumPhotosDiff = howManyChecked - maxAlbumPhotos;

  const altColor =
    selectedAlbumPhotosDiff < 1 ? { color: "white" } : { color: "#009bdd" };

  const nextButtonHandler = (e) => {
    if (selectedAlbumPhotosDiff < 0) {
      alert(`Debe seleccionar al menos ${maxAlbumPhotos} fotos!`);
    } else {
      navigate("/summary");
    }
  };
  return (
    <div
      className="container border border-dark p-0"
      style={{ width: "49rem" }}
    >
      <nav
        style={{ height: "130px" }}
        className="navbar navbar-light bg-black text-white pt-0"
      >
        <h1 className="mx-auto">Selección de Imágenes Impresas</h1>
        <h3 className="mx-auto">
          Imágenes seleccionadas:
          <span style={altColor} className="">
            {" "}
            {howManyChecked}
          </span>
          /{maxAlbumPhotos}
        </h3>
      </nav>
      <div
        style={{
          width: "782px",
          height: "530px",
          backgroundImage: "url(https://wallpaper.dog/large/5573321.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Carousel>
          {digitalImages &&
            digitalImages.map((val, idx) => {
              return (
                <div key={idx}>
                  <img src="http://www.banmines.org/wp-content/uploads/2021/10/This-Maine-Wedding-Photographer.jpg" />
                  <p className="legend">
                    {" "}
                    <input
                      type="checkbox"
                      checked={val.status}
                      onChange={(e) =>
                        setDigitalImages([
                          ...[
                            ...digitalImages.slice(0, idx),
                            {
                              id: val.id,
                              status: !val.status,
                              comments: val.comments,
                            },
                          ].concat(
                            digitalImages.slice(idx + 1, digitalImages.length)
                          ),
                        ])
                      }
                    ></input>
                    Seleccionar foto
                  </p>
                </div>
              );
            })}
        </Carousel>
      </div>
      <div
        className="text-center p-2 bg-dark w-100 d-flex text-white"
        style={{ height: "59px" }}
      >
        <button
          type="button"
          className="btn btn-warning "
          style={{ float: "left", margin: "0px" }}
          onClick={(e) => navigate("/")}
        >
          regresar
        </button>
        <div style={{ width: "700px", paddingLeft: "117px" }}>
          <h2 className="">
            Imágenes adicionales:{" "}
            {selectedAlbumPhotosDiff > 0 ? selectedAlbumPhotosDiff : 0}
          </h2>
        </div>
        <button
          type="button"
          className="btn btn-warning  "
          style={{ marginLeft: "100px" }}
          onClick={nextButtonHandler}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AlbumGallery;
