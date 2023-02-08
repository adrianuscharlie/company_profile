import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { DataCarousel } from "../Data";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MisiComponent from "../components/MisiComponents";
import Hero1 from "../assets/Hero Section/1.png";
import Hero2 from "../assets/Hero Section/2.png";
import { DataMisi } from "../Data";
import Location from "../components/Location";
import { DataLokasi } from "../Data";
export default function About() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="hero-about mt-5 mt-md-0" id="about">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <CarouselItem className="hero-item">
            <img className="d-block w-100" src={Hero1} />
          </CarouselItem>
          <CarouselItem className="hero-item">
            <img className="d-block w-100" src={Hero2} />
          </CarouselItem>
        </Carousel>
      </section>
      <section className="video-about mt-0 mt-md-5" id="video">
        <Container className="pt-5">
          <Row className="align-items-center  p-2 mb-5">
            <Col md={6} sm={12} className="mb-lg-0 pt-5">
              <div className="video-container mb-5">
                <iframe
                  style={{ aspectRatio: "16/9", width: "100%" }}
                  className="video"
                  src="https://www.youtube.com/embed/dFlDRhvM4L0"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col
              md={6}
              sm={12}
              className="mb-lg-0 p-5 d-flex align-items-start"
            >
              <div className="lc-block ms-5">
                <div editable="rich">
                  <h1 className="fw-bolder display-2">
                    Video <br />
                    Profil <br />
                    Perseroan
                  </h1>
                  <h6 className="h6">PT Janu Putra Sejahtera</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="visi-about my-0 mt-md-5 pt-3" id="visi">
        <Container className="pt-5 ps-4 mx-md-5 py-5">
          <Row className="d-flex align-items-center justify-content-center">
            <h5 className="h5">VISI PERSEROAN</h5>
            <h2 className="h2">
              Menjadi perusahaan ayam integrator terkemuka di Indonesia yang
              memberikan kontribusi positif bagi peternakan ayam dan masyarakat
            </h2>
          </Row>
        </Container>
      </section>

      <section className="misi-about mt-0 mt-md-5" id="misi">
        <Container className="py-2">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col md={6} className="">
              <div className="wrapper py-2">
                <center>
                  <h5 className="px-3 py-2 my-2" style={{ fontWeight: "500" ,fontSize:"25"}}>
                    MISI KAMI
                  </h5>
                </center>
              </div>
              <p className="lead" style={{fontSize:"25px"}}>
                Yang kami lakukan untuk membangun perusahaan
              </p>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            {DataMisi.map((misi) => (
              <MisiComponent url={misi.url} desc={misi.desc} />
            ))}
          </Row>
        </Container>
      </section>

      <section className="lokasi-about mt-0 mt-md-5" id="lokasi">
      <Container className="py-2">
      <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col md={6} className="">
              <div className="wrapper py-2 mb-4">
                <center>
                  <h5 className="px-3 py-2 my-2" style={{ fontWeight: "500" ,fontSize:"25"}}>
                    LOKASI USAHA
                  </h5>
                </center>
              </div>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mx-3">
            {DataLokasi.map((lokasi) => (
              <Location url={lokasi.url} desc={lokasi.desc} nama={lokasi.nama} />
            ))}
          </Row>
      </Container>
      </section>
    </>
  );
}
