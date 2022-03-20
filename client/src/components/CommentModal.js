import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import MyContext from "./MyContext";

const CommentModal = (props) => {
  const { val, idx, comments } = props;
  // console.log(val);
  const { galleryContext } = useContext(MyContext);
  const { digitalContext } = useContext(MyContext);
  // const { commentContext } = useContext(MyContext);
  const [digitalImages, setDigitalImages] = digitalContext;
  const [galleryImages, setGalleryImages] = galleryContext;
  const [comment, setComment] = useState(comments);
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    setGalleryImages([
      ...[
        ...galleryImages.slice(0, idx),
        {
          id: val.id,
          status: val.status,
          comments: comment,
        },
      ].concat(galleryImages.slice(idx + 1, galleryImages.length)),
    ]);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <a href="#" className="link-warning border-left" onClick={handleShow}>
        Comentarios
      </a>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="bg-dark border border-secondary text-light">
          <form>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">
                Comentarios:
              </label>
              <textarea
                className="form-control"
                id="message-text"
                value={
                  // digitalImages.length > 0 ? digitalImages[idx].comments : ""
                  comment
                }
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-dark border border-secondary">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CommentModal;
