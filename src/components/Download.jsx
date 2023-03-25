import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

export default function Download(props) {
  return (
    <Col md={6} lg={3} className="mb-5 mx-5">
      <Card className="text-center" style={{borderRadius:"10px 10px 10px 10px", border:"2px solid rgb(249, 177, 49)"}}>
        <Card.Header style={{border:"2px solid rgb(249, 177, 49)",borderBottom:"0px",backgroundColor:"white"}}>
        <h3 className="h3 text-bold" style={{color:"rgb(12, 46, 122)"}}>{props.title}</h3>
        </Card.Header>
        <Card.Body style={{border:"2px solid rgb(249, 177, 49)",borderTop:"0px",borderRight:"2px solid rgb(249, 177, 49)"}}>
          <Card.Img src={props.img} className="w-75" />
        </Card.Body>
        <Card.Footer
          className="text "
          style={{ backgroundColor: "rgb(249, 177, 49)"}}
        >
          <a
            className=""
            href={props.url}
            download style={{textDecoration:"none",color:"white"}}
          >
            Unduh
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
}
