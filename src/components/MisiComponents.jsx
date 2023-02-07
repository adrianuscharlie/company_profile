import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";

export default function NilaiComponent(props) {
  return (
    <Col md={3} sm={6} className="m-2">
      <div className="nilai-card p-3 py-5" >
        <img src={props.url} alt={props.nama} width={100} />
        <p className="lead">{props.desc}</p>
      </div>
    </Col>
  );
}
