import React, { Component } from "react";
import Hero from "../assets/Hero Section/3.jpg";
import BusinessSection from "../components/BusinessSection";
import { DataSectionBusiness } from "../Data";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
export default function Business() {
  return (
    <>
      <section className="hero-business mt-5 mt-md-0" id="business">
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
            LINI BISNIS
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
      {DataSectionBusiness.map((business) => (
        <BusinessSection
          nama={business.nama}
          url={business.url}
          id={business.id}
          desc={business.desc}
          link={business.link}
        />
      ))}
    </>
  );
}
