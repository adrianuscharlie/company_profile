import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MisiComponent from "../components/MisiComponents";
import Hero1 from "../assets/Hero Section/1.jpg";
import Hero2 from "../assets/Hero Section/2.jpg";
import LiniMasa1 from "../assets/Linimasa-02.jpg";
import LiniMasa2 from "../assets/Linimasa-03.jpg";
import Location from "../components/Location";
import Card from "react-bootstrap/esm/Card";
import Struktur1 from "../assets/struktur02.jpg"
import Struktur2 from "../assets/struktur01.jpg"
export default function About(props) {
  const data=props.data
  const lang=props.lang
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
                  {lang==='id'?'TENTANG KAMI':'ABOUT US'}
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
                  {data.icon.map((item) => (
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
                  src="https://www.youtube.com/embed/iptFv3Qkix4"
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
                  {lang==='id'?'Video':'Company'}  <br />
                  {lang==='id'?'Profil':'Profile'} <br />
                  {lang==='id'?'Perusahaan':'Video'}
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
            <h5 className="h5">{lang==='id'?'VISI PERSEROAN':'COMPANY VISION'}</h5>
            <h2 className="h2">
            {lang==='id'?'Menjadi perusahaan ayam integrator terkemuka di Indonesia yang memberikan kontribusi positif bagi peternakan ayam dan masyarakat':'To become a leading chicken integrator company in Indonesia that provides a positive contribution to the poultry industry and society.'}
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
              <h5 className=" h5 py-2">{lang==='id'?'MISI KAMI':'OUR MISSION'}</h5>
            </Col>
            <p className="lead" style={{ fontSize: "25px" }}>
            {lang==='id'?'Yang kami lakukan untuk membangun perusahaan':'What we do to build the company.'}
              
            </p>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            {data.misi.map((misi) => (
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
              <h5 className="h5 py-2">{lang==='id'?'LINIMASA SEJARAH':'TIMELINE OF HISTORY'}</h5>
            </Col>
            <p className="lead" style={{ fontSize: "25px" }}>
            {lang==='id'?'Perjalanan perusahaan kami dari masa ke masa':'The journey of our company throughout the years.'}
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
              <h5 className="h5 py-2 ">{lang==='id'?'LOKASI USAHA':'BUSINESS LOCATION'}</h5>
            </Col>
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mx-3">
            {data.lokasi.map((lokasi) => (
              <Location
                url={lokasi.url}
                desc={lokasi.desc}
                nama={lokasi.nama}
                carousel={lokasi.carousel}
                footer={lokasi.footer}
                lang={lang}
              />
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="kepemilikan-about mt-0 mt-md-5"
        id="kepemilikan"
        style={{ backgroundColor: "" }}
      >
        <Container className="py-5">
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            
                <img className="d-block w-100" src={Struktur1} />              
              
          </Row>
          <Row className="text-center d-flex  align-items-start justify-content-center mb-5">
            
                <img className="d-block w-100" src={Struktur2} />              
              
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
              <h5 className="h5 p-2">{lang==='id'?'KOMISARIS':'BOARD OF COMMISSIONER'}</h5>
            </Col>
          </Row>
          
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {data.komisaris.map((direktur) => (
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
        <Container className="py-5">
          <Row className="text-center d-flex align-items-center justify-content-center mb-3">
            <Col
              md={4}
              sm={12}
              xs={12}
              className="d-flex justify-content-center"
            >
              <h5 className="h5 p-2">{lang==='id'?'DEWAN DIREKSI':'BOARD OF DIRECTORS'}</h5>
            </Col>
          </Row>
          
          <Row className="text-center d-flex  align-items-center justify-content-center mb-5">
            {data.direksi.map((direktur) => (
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
