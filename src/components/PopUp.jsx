import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/esm/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { useState } from "react";
import Hero2 from "../assets/Hero Section/2.png";
import Hero1 from "../assets/Hero Section/1.png";
import Modal from "react-bootstrap/esm/Modal"


export default function PopUp(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="popup">
      <Row>
        <h6 className="h6">Ini test Title</h6>
        <p className="p">Ini test Paragraph</p>
      </Row>
      <Row>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <CarouselItem className="hero-item">
            <img className="d-block w-100" src={Hero1} />
          </CarouselItem>
          <CarouselItem className="hero-item">
            <img className="d-block w-100" src={Hero2} />
          </CarouselItem>
        </Carousel>
      </Row>
      <Row>
      <p className="p">Ini contoh deskripsi</p>
      </Row>
    </Container>
  );
}
