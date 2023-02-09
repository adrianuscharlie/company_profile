import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
export default function ProductSection(props) {
  return (
    <section className="mt-5 mt-md-0 px-3 py-5 product-section d-flex align-items-center justify-content-center" id={props.id}>
      <Container className="">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6} xs={12} className="d-flex justify-content-center mb-5 mb-md-4">
            <img src={props.url} className="img-thumbnail" width={750} alt={props.nama} />
          </Col>
          <Col md={6} xs={12} >
            <h1 className="h1 w-75 ms-0 ms-md-5" style={{color:"rgb(12, 46, 122)"}}>{props.nama}</h1>
            <p className="lead ms-0 ms-md-5 ">{props.desc}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
