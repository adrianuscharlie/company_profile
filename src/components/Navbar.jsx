import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo/navbar.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import { HashLink } from "react-router-hash-link";
export default function Header(props) {
  const lang = props.lang;
  return (
    <header>
      <Navbar fixed="top" expand="lg" className="navbar-custom">
        <Container fluid>
          <NavLink to="/" className="navbar-brand ms-3">
            <img className="d-inline-block align-top" src={Logo} width={50} />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <HashLink className="nav-link" to="/#home">
                {lang === "id" ? "Beranda" : "Home"}{" "}
              </HashLink>
              <div className="dropdown">
                <NavLink className="nav-link" to="about">
                  {lang === "id" ? "Tentang" : "About"}{" "}
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <HashLink smooth to="about#video">
                    {lang === "id" ? "Profil Perseroan" : "Company Profile"}
                  </HashLink>
                  <HashLink smooth to="about#visi">
                    {lang === "id" ? "Visi dan Misi" : "Vision & Mission"}
                  </HashLink>
                  <HashLink smooth to="about#linamasa">
                    {lang === "id" ? "Linimasa Sejarah" : "Timeline of History"}
                  </HashLink>
                  <HashLink smooth to="about#lokasi">
                    {lang === "id" ? "Lokasi Usaha" : "Business Location"}
                  </HashLink>
                  <HashLink smooth to="about#direksi">
                    {lang === "id" ? "Dewan Direksi" : "Board of Directors"}
                  </HashLink>
                </div>
              </div>
              <div className="dropdown">
                <NavLink className="nav-link" to="business">
                  {lang === "id" ? "Lini Bisnis" : "Business Lines"}{" "}
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <NavLink smooth to="business/pembibitan">
                    {lang === "id" ? "Peternakan Pembibitan" : "Breeding Farm"}
                  </NavLink>
                  <NavLink smooth to="business/broiler">
                    {lang === "id" ? "Peternakan Broiler" : "Broiler Farm"}
                  </NavLink>
                  <NavLink smooth to="business/petelur">
                    {lang === "id" ? "Peternakan Petelur" : "Layer Farm"}
                  </NavLink>
                  <NavLink smooth to="business/penetasan">
                    {lang === "id" ? "Penetasan Telur" : "Egg Incubation"}
                  </NavLink>
                  <NavLink smooth to="business/rpa">
                    {lang === "id"
                      ? "Rumah Potong Ayam"
                      : "Chicken Slaughter House"}
                  </NavLink>
                </div>
              </div>
              <div className="dropdown">
                <NavLink className="nav-link" to="product">
                  {lang === "id" ? "Produk" : "Product"}{" "}
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <HashLink smooth to="product#docps">
                    DOC Parent Stock
                  </HashLink>
                  <HashLink smooth to="product#docfs">
                    DOC Final Stock
                  </HashLink>
                  <HashLink smooth to="product#broiler">
                    {lang === "id" ? "Ayam Hidup" : "Live Chicken"}
                  </HashLink>
                  <HashLink smooth to="product#telur">
                    {lang === "id" ? "Telur Komersil" : "Commercial Eggs"}
                  </HashLink>
                  <HashLink smooth to="product#karkas">
                    {lang === "id" ? "Karkas Ayam" : "Chicken Carcass"}
                  </HashLink>
                </div>
              </div>
              <NavLink className="nav-link" to="relation">
                {lang === "id" ? "Relasi Investor" : "Investor Relations"}
              </NavLink>
            </Nav>
            <div className="dropdown-divider"></div>
            <HashLink
              className="contact-link nav-link ms-1 text-center ms-1 text-center mx-lg-0 ms-5 me-5 px-3 mt-2 py-2 me-lg-3"
              id="contact-link"
              to="contact"
            >{lang === "id" ? "Kontak": "Contact"}
              
            </HashLink>
            <div className="d-flex justify-content-center">
              <Button
              id="language"
                className="ms-1 text-center mx-lg-0 ms-5 me-5 px-3 mt-2 py-2 me-lg-3 bg-transparent"
                onClick={props.handleLang}
              >
                {lang === "id" ? <span>&#x1F1EE;&#x1F1E9;</span> : <span>&#x1F1EC;&#x1F1E7;</span>}
              </Button>
            </div>
            <div></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
