import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function BusinessSection(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section
      className="mt-5 mt-md-0 px-3 py-5 product-section d-flex align-items-center justify-content-center"
      id={props.id}
    >
      <Container className="">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6} xs={12} className="d-flex justify-content-center xs-mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {props.url.map((photo) => (
                <CarouselItem className="hero-item">
                  <img className="d-block w-100" src={photo} />
                </CarouselItem>
              ))}
            </Carousel>
          </Col>
          <Col md={6} xs={12} className="mt-5 mt-md-0">
            <h1 className="h1 w-75 ms-0 ms-md-5" style={{ color: "rgb(12, 46, 122)" }}>
              {props.nama}
            </h1>
            <p className="lead ms-0 ms-md-5">{props.desc}</p>
            <Link
              to={props.link}
              className="button-selengkapnya ms-0 ms-md-5"
              style={{ textDecoration: "none" }}
            >
            {props.lang==='id'?'Selengkapnya':'More Information'}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
