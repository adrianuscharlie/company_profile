import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";

export default function NilaiComponent(props) {
  return (
    <Col md={3} sm={6} className="m-2 my-1">
      <div className="nilai-card p-3 py-3" >
        <img src={props.url} alt={props.nama} width={100} className="mb-3"/>
        <h4 className="h4">{props.nama}</h4>
        <p className="lead">{props.desc}</p>
      </div>
    </Col>
  );
}
