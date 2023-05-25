import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Info from "../assets/Photo/1.jpg";
import ProductComponent from "../components/ProductComponent";
import NilaiComponent from "../components/NilaiComponent";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Home(props) {
  const data = props.data;
  const lang = props.lang;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="mt-5 mt-md-0" id="home">
        <Carousel activeIndex={index} onSelect={handleSelect} className="">
          {data.carousel.map((img) => (
            <CarouselItem>
              <div
                className="d-block vh-100 mx-auto d-flex align-items-center justify-content-center"
                style={{
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <Row>
                    <h1 className="h1 text-center" style={{ color: "white" }}>
                      {img.top}
                    </h1>
                    <h1
                      className="display-3 text-center"
                      style={{ color: "rgb(249, 177, 49)", fontWeight: "bold" }}
                    >
                      {img.bottom}
                    </h1>
                  </Row>
                </Container>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="info-perusahaan hero mx-4 mt-0 mt-md-5 mb-5">
        <Container className="py-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6} sm={12}>
              <img src={Info} className="img-thumbnail" alt="info januputra" />
            </Col>
            <Col md={6} sm={12}>
              <div className="ms-0 ms-md-4">
                <h1
                  className="h1 mb-4"
                  style={{ fontSize: "50px", color: "rgb(12,46,122)" }}
                >
                  {lang === "id"
                    ? "Perusahaan Peternakan Terintegrasi"
                    : "Integrated Livestock Company"}
                </h1>
                <p className="lead" style={{ fontWeight: "400" }}>
                  {lang === "id"
                    ? "Janu Putra Sejahtera berkomitmen menjadi perusahaan ayam integrator terkemuka di Indonesia yang memberikan kontribusi positif bagi peternakan ayam dan masyarakat"
                    : "Janu Putra Sejahtera is committed to becoming a leading chicken company integrator in Indonesia that provides a positive contributionto the poultry industry and society."}
                </p>
                <div className="wrapper py-4">
                  <HashLink
                    smooth
                    className=" w-50 px-3 py-2 my-3"
                    to="/about#hero"
                    style={{ fontWeight: "500" }}
                  >{lang === "id"
                  ? "Selengkapnya"
                  : "Find More"}
                    
                  </HashLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product mt-5 mt-md-0">
        <Container className="py-5 ">
          <Row className="text-center d-flex align-items-center justify-content-center mb-5">
            <Col md={7} className="mb-3">
              <HashLink
                smooth
                className="w-50 px-3 py-2 m-3 btn-product"
                to="/product#product"
                style={{ fontWeight: "500" }}
              >{lang === "id"
              ? "PRODUK KAMI"
              : "OUR PROUCT"}
                
              </HashLink>
            </Col>
            <p className="lead px-5" style={{ fontSize: "25px" }}>
            {lang === "id"
              ? "Kami menyediakan produk yang berkualitas dan terjangkau"
              : "We provide quality and affordable products."}
              
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {data.produk.map((produk) => (
              <ProductComponent
                nama={produk.nama}
                url={produk.url}
                id={produk.id}
              />
            ))}
          </Row>
        </Container>
      </section>
      <section className="nilai mt-5 mt-md-0">
        <Container className="py-5 ">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="w-50 h5 py-2">
              {lang === "id"
              ? "NILAI KAMI"
              : "OUR VALUES"}</h5>
            </Col>
            <p className="lead" style={{ fontSize: "25px" }}>
            {lang === "id"
              ? "Mengapa harus memilih produk kami?"
              : "Why should you choose our products?"}
              
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            {data.nilai.map((produk) => (
              <NilaiComponent
                nama={produk.nama}
                url={produk.url}
                desc={produk.desc}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
