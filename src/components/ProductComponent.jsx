import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";

export default function ProductComponent(props) {
  return (
    <Col lg={2} md={2} sm={3} xs={6} className="m-2">
      <div className="produk-card p-3 py-5" >
        <img src={props.url} alt={props.nama} width={100} className="img-responsive" />
        <h6 className="h6">{props.nama}</h6>
      </div>
    </Col>
  );
}
