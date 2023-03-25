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
export default function Header() {
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
                Beranda{" "}
              </HashLink>
              <div className="dropdown">
                <NavLink className="nav-link" to="about">
                Tentang{" "} <i className="fa fa-caret-down"></i>
              </NavLink>
                <div className="dropdown-content">
                  <HashLink smooth  to="about#video">Profil Perseroan</HashLink>
                  <HashLink smooth  to="about#visi">Visi dan Misi</HashLink>
                  <HashLink smooth  to="about#linamasa">Linimasa Sejarah</HashLink>
                  <HashLink smooth  to="about#lokasi">Lokasi Usaha</HashLink>
                  <HashLink  smooth to="about#direksi">Dewan Direksi</HashLink>
                </div>
              </div>
              <div className="dropdown">
                <NavLink className="nav-link" to="business">
                Lini Bisnis{" "} <i className="fa fa-caret-down"></i>
              </NavLink>
                <div className="dropdown-content">
                  <NavLink smooth to="business/pembibitan">Peternakan Pembibitan</NavLink>
                  <NavLink smooth to="business/broiler">Peternakan Broiler</NavLink>
                  <NavLink smooth to="business/petelur">Peternakan Petelur</NavLink>
                  <NavLink smooth to="business/penetasan">Penetasan Telur</NavLink>
                  <NavLink smooth to="business/rpa">Rumah Potong Ayam</NavLink>
                </div>
              </div>
              <div className="dropdown">
                <NavLink className="nav-link" to="product">
                Produk{" "} <i className="fa fa-caret-down"></i>
              </NavLink>
                <div className="dropdown-content">
                  <HashLink smooth to="product#docps">DOC Parent Stock</HashLink>
                  <HashLink smooth to="product#docfs">DOC Final Stock</HashLink>
                  <HashLink smooth to="product#broiler">Ayam Hidup</HashLink>
                  <HashLink smooth to="product#telur">Telur Komersil</HashLink>
                  <HashLink smooth to="product#karkas">Karkas Ayam</HashLink>
                </div>
              </div>
              <NavLink className="nav-link" to="relation">
                Relasi Investor
              </NavLink>
              
            </Nav>
            <div className="dropdown-divider"></div>
            <HashLink className="contact-link nav-link ms-1 text-center mx-lg-0 ms-5 me-5 px-3 py-2 me-lg-3" id="contact-link" to="contact">
                Kontak
              </HashLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
