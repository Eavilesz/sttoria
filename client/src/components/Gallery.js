// src/reusable/image-gallery.component.js
import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";
import CommentModal from "./CommentModal";

const Gallery = () => {
  let navigate = useNavigate();
  const { galleryContext } = useContext(MyContext);
  const [galleryImages, setGalleryImages] = galleryContext;
  const maxDigitalPhotos = 5;

  const howManyChecked = galleryImages.filter(
    (val) => val.status === true
  ).length;
  const selectedGalleryPhotosDiff = howManyChecked - maxDigitalPhotos;

  const altColor =
    selectedGalleryPhotosDiff < 1 ? { color: "white" } : { color: "#009bdd" };

  const nextButtonHandler = (e) => {
    if (selectedGalleryPhotosDiff < 0) {
      alert(`Debe seleccionar al menos ${maxDigitalPhotos} fotos!`);
    } else {
      navigate("/album-gallery");
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
        <h1 className="mx-auto">Selección de Imágenes Digitales</h1>
        <h3 className="mx-auto">
          Imágenes seleccionadas: <span style={altColor}>{howManyChecked}</span>
          /{maxDigitalPhotos}
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
          {galleryImages.map((val, idx) => {
            return (
              <div key={idx}>
                <img src="http://www.banmines.org/wp-content/uploads/2021/10/This-Maine-Wedding-Photographer.jpg" />
                <p className="legend">
                  {" "}
                  <input
                    type="checkbox"
                    checked={val.status}
                    onChange={(e) =>
                      setGalleryImages([
                        ...[
                          ...galleryImages.slice(0, idx),
                          {
                            id: val.id,
                            status: !val.status,
                            comments: val.comments,
                          },
                        ].concat(
                          galleryImages.slice(idx + 1, galleryImages.length)
                        ),
                      ])
                    }
                  ></input>
                  Seleccionar foto &nbsp;&nbsp;
                  {val.status === true ? (
                    <CommentModal
                      val={val}
                      idx={idx}
                      comments={val.comments}
                    ></CommentModal>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        className=" p-2 bg-dark text-white d-flex"
        style={{ height: "59px" }}
      >
        <div style={{ width: "700px", paddingLeft: "100px" }}>
          <h2 className="mx-auto">
            Imágenes adicionales:{" "}
            {selectedGalleryPhotosDiff > 0 ? selectedGalleryPhotosDiff : 0}
          </h2>
        </div>
        <button
          type="button"
          className="btn btn-warning float-right close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={nextButtonHandler}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Gallery;
