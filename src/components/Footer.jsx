import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo/footer.png";
import { HashLink} from "react-router-hash-link";
export default function Footer() {
  return (
    <footer
      className="pt-2 px-0 white-50 text-start d-flex custom-footer"
      style={{ color: "white", backgroundColor: "rgb(12,46,122)" }}
    >
      <Container className="px-3">
        <Row className="pt-3">
          <Col lg={1} md={4} sm={6} className="mb-3 col-6">
            <img
              src={Logo}
              className="img-thumbnail"
              alt="logo januputra"
              width={200}
            />
          </Col>
          <Col lg={2} md={4} sm={6} className="mb-3 col-6">
            <h4 className="h4">Tentang</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#video">Profil Perseroan</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">Visi dan Misi</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">Linimasa Sejarah</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#lokasi">Lokasi Usaha</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">Dewan Direksi</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} sm={6} className="mb-3 col-6">
            <h4 className="h4">Lini Bisnis</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#pembibitan">Peternakan Pembibitan</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#broiler">Peternakan Broiler</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#petelur">Peternakan Petelur</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#penetasan">Penetasan Telur</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#rpa">Rumah Potong Ayam</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} sm={6} className="mb-3 col-6">
            <h4 className="h4">Produk</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#docps">DOC Parent Stock</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#docfs">DOC Final Stock</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#broiler">Ayam Hidup</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#telur">Telur Komersil</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#karkas">Karkas Ayam</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} sm={6} className="mb-3 col-6">
            <h4 className="h4">Relasi Investor</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink to="/relation">Prospektur</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/relation">Laporan Keuangan</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/relation">Pengumuman RUPS</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={6} className="mb-3">
            <Container className="custom-footer-up text-center">
            <HashLink smooth to="contact" id="hubungi-kami">Hubungi Kami</HashLink>
            </Container>
            <Container className="custom-footer-down align-items-center px-3">
              <Row className="d-flex justify-content-start align-items-center p-2">
                <Col md={2} xs={1}>
                  <i className="fa fa-phone"></i>
                </Col>
                <Col md={10} xs={10}>
                  (0274) 871163
                </Col>
              </Row>
              <Row className="d-flex justify-content-start align-items-center p-2">
                <Col md={2} xs={1}>
                  <i className="fa fa-envelope"></i>
                </Col>
                <Col md={10} xs={8}>
                  info@januputrasejahtera.com
                </Col>
              </Row>
              <Row className="d-flex justify-content-start align-items-center p-2">
                <Col md={2} xs={1}>
                  <i className="fa fa-instagram"></i>
                </Col>
                <Col md={10} xs={10}>
                  januputrasejahtera
                </Col>
              </Row>
              <Row className="d-flex justify-content-start align-items-center p-2">
                <Col md={2} xs={1}>
                  <i className="fa fa-linkedin"></i>
                </Col>
                <Col md={10} xs={10}>
                  PT Janu Putra Sejahtera
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="pt-3 text-center copyright">
          <p className="p">
            ©️ 2023 Janu Putra Sejahtera, Inc. All Rights Reserved{" "}
          </p>
        </Row>
      </Container>
    </footer>
  );
}
