import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import { HashLink } from "react-router-hash-link";
import Image from "react-bootstrap/esm/Image";
export default function ProductComponent(props) {
  return (
    <Col lg={2} md={2} sm={3} xs={6} className="m-2">
      <div className="produk-card p-4">
      <HashLink to={props.id}>
        <Image
          src={props.url}
          alt={props.nama}
          width={100}
          className="img-responsive"
        />
        </HashLink>
        <h6 className="h6">{props.nama}</h6>
      </div>
    </Col>
  );
}
