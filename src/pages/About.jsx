import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { DataCarousel } from "../Data";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MisiComponent from "../components/MisiComponents";
import Hero1 from "../assets/Hero Section/1.jpg";
import Hero2 from "../assets/Hero Section/2.jpg";
import LiniMasa1 from "../assets/Linimasa-02.jpg";
import LiniMasa2 from "../assets/Linimasa-03.jpg";
import { DataMisi } from "../Data";
import Location from "../components/Location";
import { DataLokasi } from "../Data";
import Card from "react-bootstrap/esm/Card";
import { DewanDireksi } from "../Data";
import { IconAbout } from "../Data";
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
            <div
              className="d-block vh-100 mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${Hero1})`,
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
                    TENTANG KAMI
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
          </CarouselItem>
          <CarouselItem className="hero-item">
            <div
              className="d-block vh-100 mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${Hero2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container>
                <Row className="d-flex align-items-center justify-content-center">
                  {IconAbout.map((item) => (
                    <Col
                      xs={6}
                      sm={6}
                      md={3}
                      lg={3}
                      className="justify-content-center"
                    >
                      <Row>
                        <img className="img-responsive w-50" src={item.url} />
                      </Row>
                      <Row>
                        <h3
                          className="h3 text-center"
                          style={{ color: "rgb(249, 177, 49)" }}
                        >
                          {item.title}
                        </h3>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
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
                  src="https://www.youtube.com/embed/AjWfY7SnMBI"
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
              <div className="lc-block lg-ms-5">
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
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className=" h5 py-2">MISI KAMI</h5>
            </Col>
            <p className="lead" style={{ fontSize: "25px" }}>
              Yang kami lakukan untuk membangun perusahaan
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            {DataMisi.map((misi) => (
              <MisiComponent url={misi.url} desc={misi.desc} />
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="linimasa-about mt-0 mt-md-5"
        id="sejarah"
        style={{ backgroundColor: "" }}
      >
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 py-2">LINIMASA SEJARAH</h5>
            </Col>
            <p className="lead" style={{ fontSize: "25px" }}>
              Yang kami lakukan untuk membangun perusahaan
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <CarouselItem className="">
                <img className="d-block w-100" src={LiniMasa1} />
              </CarouselItem>
              <CarouselItem className="">
                <img className="d-block w-100" src={LiniMasa2} />
              </CarouselItem>
            </Carousel>
          </Row>
        </Container>
      </section>

      <section className="lokasi-about mt-0 mt-md-5" id="lokasi">
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              xs={12}
              sm={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 py-2 ">LOKASI USAHA</h5>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mx-3">
            {DataLokasi.map((lokasi) => (
              <Location
                url={lokasi.url}
                desc={lokasi.desc}
                nama={lokasi.nama}
                carousel={lokasi.carousel}
                footer={lokasi.footer}
              />
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="direksi-about mt-0 mt-md-5"
        id="direksi"
        style={{ backgroundColor: "" }}
      >
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 py-2">DEWAN DIREKSI</h5>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {DewanDireksi.map((direktur) => (
              <Col
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-center align-items-center mb-5"
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={direktur.url} />
                  <Card.Body>
                    <Card.Title>{direktur.nama}</Card.Title>
                    <Card.Text>{direktur.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
