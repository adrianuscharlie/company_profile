import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo/footer.png";
import { HashLink} from "react-router-hash-link";
export default function Footer(props) {
  const lang=props.lang
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
            <h4 className="h4">{lang==='id'?'Tentang':'About'}</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#video">{lang==='id'?'Profil Perseroan':'Company Profile'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">{lang==='id'?'Visi dan Misi':'Vision & Mission'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">{lang==='id'?'Linimasa Sejarah':'Timeline of History'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#lokasi">{lang==='id'?'Lokasi Usaha':'Business Location'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/about#visi">{lang==='id'?'Dewan Direksi':'Board of Directors'}</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} sm={6} className="mb-3 col-6">
            <h4 className="h4">{lang==='id'?'Lini Bisnis':'Business Lines'}</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#pembibitan">{lang==='id'?'Peternakan Pembibitan':'Breeding Farm'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#broiler">{lang==='id'?'Peternakan Broiler':'Broiler Farm'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#petelur">{lang==='id'?'Peternakan Petelur':'Layer Farm'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#penetasan">{lang==='id'?'Penetasan Telur':'Egg Incubation'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/business#rpa">{lang==='id'?'Rumah Potong Ayam':'Chicken Slaughter House'}</HashLink>
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
                <HashLink smooth to="/product#broiler">{lang==='id'?'Ayam Hidup':'Live Chicken'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#telur">{lang==='id'?'Telur Komersil':'Commercial Eggs'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink smooth to="/product#karkas">{lang==='id'?'Karkas Ayam':'Chicken Carcass'}</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={3} sm={6} className="mb-3 col-6">
            <h4 className="h4">{lang==='id'?'Relasi Investor':'Investor Relations'}</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <HashLink to="/relation">{lang==='id'?'Prospektus':'Prospectus'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/relation">{lang==='id'?'Laporan Keuangan':'Financial Statements'}</HashLink>
              </li>
              <li className="nav-item mb-2">
                <HashLink to="/relation">{lang==='id'?'Pengumuman RUPS':'Notice of General Meeting of Shareholders'}</HashLink>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={6} className="mb-3">
            <Container className="custom-footer-up text-center">
            <HashLink smooth to="contact" id="hubungi-kami">{lang==='id'?'Hubungi Kami':'Contact Us'}</HashLink>
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
