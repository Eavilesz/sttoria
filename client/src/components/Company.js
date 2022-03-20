import React, { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {
  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all-galleries")
      .then((res) => setGalleries(res.data.gallery[0].photos))
      .then((res) => console.log(galleries));
  }, []);
  return (
    <div
      className="shadow container border border-dark p-0"
      style={{ width: "49rem" }}
    >
      {/* <img src="client\src\images\1.jpg" /> */}
      <nav
        style={{ height: "130px" }}
        className="navbar navbar-light bg-black text-white pt-0"
      >
        <div>
          <img
            src={"http://127.0.0.1:8887/logo.jpg"}
            style={{
              height: "20px",
              marginRight: "100px",
              marginTop: "0px",
            }}
          ></img>
        </div>
        <h1 style={{ marginTop: "35px" }} className="mx-auto">
          Resumen de imágenes seleccionadas
        </h1>
      </nav>

      <div
        style={{
          width: "782px",
          height: "530px",
          backgroundImage: "url(http://127.0.0.1:8887/fondoCarrusel.jpg)",
          backgroundSize: "cover",
        }}
        className=" justify-content-center pt-5 "
      >
        <div
          className=" overflow-auto mx-auto mt-4 bg-secondary p-2 rounded mb-3"
          style={{ width: "405px", height: "350px" }}
        >
          <div className="summary-content">
            <div
              className="d-flex  mx-auto "
              style={{ width: "23rem", height: "auto" }}
            >
              <div className="" style={{ width: "12rem" }}>
                <h5 className="text-primary">Digitales</h5>
                {/* {digitalImages.map((val, idx) => {
                  return (
                    <p key={idx} style={{ margin: "0px" }}>
                      DSC 00{val.id}
                    </p>
                  );
                })} */}
              </div>
              <div className="" style={{ width: "12rem" }}>
                <h5 className="text-warning">Álbum</h5>
                {/* {albumImages.map((val, idx) => {
                  return (
                    <p key={idx} style={{ margin: "0px" }}>
                      DSC 00{val.id}
                    </p>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-2 bg-dark w-100 d-flex"
        style={{ height: "59px" }}
      ></div>
    </div>
  );
};
export default Company;
