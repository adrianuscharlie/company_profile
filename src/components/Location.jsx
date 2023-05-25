import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Carousel from "react-bootstrap/esm/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Container from "react-bootstrap/esm/Container";
export default function Location(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [isOpen, setIsOpen] = useState(false);

  function togglePopUp() {
    setIsOpen(!isOpen);
  }
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <Col lg={5} md={12} sm={12} xs={12} className="custom-card  mb-5 mx-4 w-30 py-2">
      <Row className="d-flex justify-content-start align-items-center">
        <Col md={4} xs={5} className="d-flex justify-content-center">
          <img src={props.url} className="img-responsive" width={125} />
        </Col>
        <Col md={8} xs={7} className="">
          <div className="card-body text-start">
            <div className="card-title">
              <h4 className="h4" style={{fontSize:"30px"}}>{props.nama}</h4>
            </div>
            <div className="card-text">
              <p className="p" style={{fontSize:"14px"}}>{props.desc}</p>
              <button
                href=""
                onClick={togglePopUp}
                className="button-selengkapnya"
              >
                {props.lang==='id'?'Selengkapnya':'More Information'}
              </button>
              <Modal show={isOpen} onHide={handleClose} className="text-center">
                <Modal.Header closeButton className="custom-modal">
                  <Container className="p-2 d-flex justify-content-center align-items-center">
                    <Row>
                    <Modal.Title style={{color:"rgb(12, 46, 122)",fontWeight:"500"}}>{props.nama}</Modal.Title>
                    <p className="p">{props.desc}</p>
                    </Row>
                  </Container>
                </Modal.Header>
                <Modal.Body className="p-5">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                  {props.carousel.map((img)=>(
                    <CarouselItem className="hero-item">
                      <img className="img-thumbnail" src={img}/>
                    </CarouselItem>
                  ))}

                  </Carousel>
                </Modal.Body>
                <Modal.Footer>
                  <p className="lead p-2">{props.footer}</p>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
