import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo/footer.png";
import { NavLink } from "react-router-dom";
import { HashLink, HashLink as Link } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer
      className="pt-2 px-0 white-50 text-start d-flex custom-footer"
      style={{ color: "white", backgroundColor: "rgb(12,46,122)" }}
    >
      <Container className="px-3">
        <Row className="pt-3">
          <Col md={1} sm={6} className="mb-3 col-6">
            <img
              src={Logo}
              className="img-thumbnail"
              alt="logo januputra"
              width={200}
            />
          </Col>
          <Col md={2} sm={6} className="mb-3 col-6">
            <h4 className="h4">Tentang</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="/about">Profile Perseroan</NavLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/about#visi">Visi dan Misi</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/about#visi">Linamasa Sejarah</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/about#visi">Lokasi Usaha</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/about#visi">Dewan Direksi</HashLink>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={6} className="mb-3 col-6">
            <h4 className="h4">Lini Bisnis</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink to="/business">Peternakan Pembibitan</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/business">Peternakan Broiler</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/business">Peternakan Petelur</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/business">Penetasan Telur</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/business">Rumah Potong</HashLink>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={6} className="mb-3 col-6">
            <h4 className="h4">Produk</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink to="/product">DOC Parent Stock</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/product">DOC Final Stock</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/product">Ayam Hidup</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/product">Telur Komersil</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/product">Karkas Ayam</HashLink>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={6} className="mb-3 col-6">
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
          <Col md={3} sm={6} className="mb-3">
            <Container className="custom-footer-up text-center">
              <h4 className="h4">Hubungi Kami</h4>
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
                  <i className="fa fa-whatsapp"></i>
                </Col>
                <Col md={10} xs={10}>
                  +62 812 3456 7890
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
