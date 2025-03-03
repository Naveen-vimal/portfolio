import React, { useState } from "react";
import gaytri from "../Assets/gaytri.jpg";
import grt from "../Assets/grt.jpg";
import aplus from "../Assets/aplus.jpg";
import party from "../Assets/party.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "", image: "" });

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setModalContent(project);
    setShow(true);
  };

  const workInfoData = [
    {
      image: gaytri,
      title: "Gayathrism Artwork",
      text: "At Gayathrism Artwork, we believe in the power of creativity.",
    },
    {
      image: grt,
      title: "Grand Royal Tours",
      text: "At Grand Royal Tours, we make sweet memories.",
    },
    {
      image: aplus,
      title: "Nangai Naturals",
      text: "Nangai Naturals is an organic skincare and haircare brand.",
    },
    {
      image: party,
      title: "A+PLUS",
      text: "We embarked on a journey to create Online Tutoring.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">My Projects</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((project, index) => (
          <div className="work-section-info card" key={index}>
            <div className="info-boxes-img-container">
              <img src={project.image} alt={project.title} />
            </div>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
            <p>
              <a href="#" className="atrag" onClick={() => handleShow(project)}>
                View
              </a>
            </p>
          </div>
        ))}
      </div>
      
      {/* Modal Component */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent.image} alt={modalContent.title} style={{ width: "100%", borderRadius: "10px" }} />
          <p className="mt-3">{modalContent.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
