import React, { Component } from "react";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Carousel from "react-bootstrap/esm/Carousel";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";

export default function BusinessLayout(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="hero mt-5 mt-md-0">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {props.url.map((img) => (
            <CarouselItem className="hero-item">
              <img className="d-block w-100" src={img} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className={props.path + ""}>
        <Container className="p-5">
          <Row className="d-flex justify-content-start align-items-center mb-5">
            <Col md={1} xs={1} className="me-5">
              <img
                className="img-responsive"
                src={props.icon}
                alt={props.path}
                width={100}
              />
            </Col>
            <Col md={8} xs={5} className="ms-4">
              <h1
                className="display-2 bold ms-3 ms-md-0"
                style={{ fontWeight: "500", color: "rgb(12, 46, 122)" }}
              >
                {props.nama}
              </h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-start align-items-center">
            <p className="lead">{props.par1}</p>
            <p className="lead">{props.par2}</p>
            <p className="lead">{props.par3}</p>
          </Row>
        </Container>
      </section>
    </>
  );
}
