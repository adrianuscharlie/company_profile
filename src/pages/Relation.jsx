import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Hero from "../assets/Hero Section/5.jpg";
import Download from "../components/Download";
export default function Relation(props) {
  const data=props.data
  const lang=props.lang
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
      <section className="download-relation mt-0 mt-md-5">
      <Container className="py-5">
      <h1 className="display-1 text-center  mb-5 text-bold" style={{color:"rgb(12, 46, 122)",fontWeight:"bold"}}>{lang === "id" ? "RELASI INVESTOR" : "INVESTOR RELATION"}</h1>
          <Row className="d-flex justify-content-center align-items-center px-5">
            {data.relasi.map((data)=>(
                <Download title={data.title} img={data.img} url={data.url}/>
            ))}
          </Row>
      </Container>
      </section>
    </>
  );
}
