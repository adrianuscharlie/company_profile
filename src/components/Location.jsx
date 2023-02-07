import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
export default function Location(props) {
  return (
    <Col md={6} sm={12} xs={12} className="">
      <div className="card-img">
      <img src={props.url} className="img-thumbnail"/>
      </div>
      <div className="card-body">
        <div className="card-title"></div>
        <div className="card-desc"></div>
      </div>
    </Col>
  );
}
