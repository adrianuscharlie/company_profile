import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";

export default function MisiComponent(props) {
  return (
    <Col md={3} sm={6} className="m-2">
      <div className="nilai-card p-3" >
        <img src={props.url} alt={props.nama} width={125} />
        <p className="lead mt-2">{props.desc}</p>
      </div>
    </Col>
  );
}
