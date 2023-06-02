import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { Table } from "react-bootstrap";
import Hero from "../assets/Hero Section/5.jpg";

export default function RelationLayout(props) {
  const lang = props.lang;
  return (
    <>
      <section className="hero-relation mt-5 mt-md-0 mb-5" id="product">
        <div
          className="d-block vh-100 mx-auto d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <Row>
              <h1
                className="display-1 text-center"
                style={{ color: "rgb(249, 177, 49)" }}
              >
                {lang === "id" ? "RELASI INVESTOR" : "INVESTOR RELATION"}
              </h1>
              <h1
                className="h1 text-center"
                style={{ color: "white", fontWeight: "bold" }}
              >
                PT JANU PUTRA SEJAHTERA
              </h1>
            </Row>
          </Container>
        </div>
      </section>
      <section className="hero mt-5 mt-md-0">
        <Container className="p-5">
          <Row className="d-flex justify-content-start align-items-center">
            <h1 className=" text-center text-bold">{props.nama}</h1>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <div className="table-responsive">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>{lang === "id" ? "Nama" : "Name"}</th>
                    <th>{lang === "id" ? "Aksi" : "Action"}</th>
                  </tr>
                </thead>
                <tbody>
                  {props.file.map((item, index) => (
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>
                        <a
                          className=""
                          href={item.url}
                          download
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {lang === "id" ? "Unduh" : "Download"}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
