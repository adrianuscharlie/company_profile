import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataCarousel } from "../Data";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Info from "../assets/Photo/1.jpg";
import { DataProduk } from "../Data";
import ProductComponent from "../components/ProductComponent";
import { DataNilai } from "../Data";
import NilaiComponent from "../components/NilaiComponent";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="hero mt-5 mt-md-0">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {DataCarousel.map((img) => (
            <CarouselItem className="hero-item">
              <img className="d-block w-100" src={img} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="info-perusahaan hero mt-0 mt-md-5">
        <Container className="py-5">
          <Row className="d-flex justify-content-center align-items-start">
            <Col md={6} sm={12}>
              <img src={Info} className="img-thumbnail" alt="info januputra" />
            </Col>
            <Col md={6} sm={12}>
              <div className="ms-4">
                <h1
                  className="h1 mb-4"
                  style={{ fontSize: "50px", color: "rgb(12,46,122)" }}
                >
                  Perusahaan Terintegrasi Peternakan dan Rumah Potong Ayam
                </h1>
                <p className="lead" style={{ fontWeight: "400" }}>
                  Janu Putra Sejahtera berkomitmen menjadi perusahaan ayam
                  integrator terkemuka di Indonesia yang memberikan kontribusi
                  positif bagi peternakan ayam dan masyarakat
                </p>
                <div className="wrapper py-4">
                <NavLink className=" w-50 px-3 py-2 my-3" to="/about" style={{ fontWeight: "500" }}>Selengkapnya</NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product mt-5 mt-md-0">
        <Container className="py-5 ">
          <Row className="text-center d-flex align-items-center justify-content-center mb-5">
            <Col md={6} className="">
              <div className="wrapper py-4">
              <NavLink className="w-50 px-3 py-2 m-3" to="/product" style={{ fontWeight: "500" }}>Produk Kami</NavLink>
              </div>
              <p className="lead">
                Kami menyediakan produk yang berkualitas dan terjangkau
              </p>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {DataProduk.map((produk) => (
              <ProductComponent nama={produk.nama} url={produk.url} />
            ))}
          </Row>
        </Container>
      </section>
      <section className="nilai mt-5 mt-md-0">
        <Container className="py-5 ">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col md={6} className="">
              <div className="wrapper py-2">
                <center>
                  <h5 className="px-3 py-2 m-3" style={{ fontWeight: "500" }}>
                    Nilai kami
                  </h5>
                </center>
              </div>
              <p className="lead">Mengapa harus memilih produk kami?</p>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            {DataNilai.map((produk) => (
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
