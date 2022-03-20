import React, { useContext, useState, useRef } from "react";
import axios from "axios";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Summary = () => {
  let navigate = useNavigate();
  const { galleryContext } = useContext(MyContext);
  const { digitalContext } = useContext(MyContext);
  const [galleryImages, setGalleryImages] = galleryContext;
  const [digitalImages, setDigitalImages] = digitalContext;
  const albumImages = digitalImages.filter((val) => val.status == true);
  const howManyDigitalImages = digitalImages.length;
  const howManyAlbumImages = digitalImages.filter(
    (val) => val.status === true
  ).length;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const finHandler = (e) => {
    axios
      .put("http://localhost:8000/api/gallery/62311db94f5f17fa88c5816c", {
        photos: digitalImages,
      })
      .then((res) => console.log(res));
  };

  return (
    <div
      className="shadow container border border-dark p-0"
      style={{ width: "49rem" }}
    >
      <nav
        style={{ height: "130px" }}
        className="navbar navbar-light bg-black text-white pb-4"
      >
        <h1 style={{ marginTop: "35px" }} className="mx-auto">
          Resumen de imágenes seleccionadas
        </h1>
      </nav>

      <div
        style={{
          width: "782px",
          height: "530px",

          backgroundImage: "url(https://wallpaper.dog/large/5573321.jpg)",
          backgroundSize: "cover",
        }}
        className=" justify-content-center pt-5 "
      >
        <div
          className=" overflow-auto mx-auto mt-4 bg-secondary p-2 rounded mb-3"
          style={{ width: "405px", height: "350px" }}
        >
          <div className="summary-content" ref={componentRef}>
            <div
              className=" mx-auto"
              style={{ width: "20rem", height: "5rem" }}
            >
              <p>
                Fotos
                digitales:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {howManyDigitalImages}/5
              </p>
              <p>
                Fotos
                Álbum:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {howManyAlbumImages}/3
              </p>
            </div>
            <div
              className="d-flex  mx-auto "
              style={{ width: "23rem", height: "auto" }}
            >
              <div className="" style={{ width: "12rem" }}>
                <h5 className="text-primary">Digitales</h5>
                {digitalImages.map((val, idx) => {
                  return (
                    <p key={idx} style={{ margin: "0px" }}>
                      DSC 00{val.id}
                    </p>
                  );
                })}
              </div>
              <div className="" style={{ width: "12rem" }}>
                <h5 className="text-warning">Álbum</h5>
                {albumImages.map((val, idx) => {
                  return (
                    <p key={idx} style={{ margin: "0px" }}>
                      DSC 00{val.id}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-warning d-flex mx-auto"
          onClick={handlePrint}
        >
          Descargar PDF
        </button>
      </div>
      <div
        className="text-center p-2 bg-dark w-100 d-flex"
        style={{ height: "59px" }}
      >
        <button
          type="button"
          className="btn btn-warning"
          style={{ float: "left", margin: "0px" }}
          onClick={(e) => navigate("/album-gallery")}
        >
          regresar
        </button>

        <button
          type="button"
          className="btn btn-warning"
          style={{ marginLeft: "590px" }}
          onClick={finHandler}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
};
export default Summary;
