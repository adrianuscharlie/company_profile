import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Logo/navbar.png"
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Navbar fixed="top"  expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-brand">
            <img className="d-inline-block align-top" src={Logo} width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Beranda </NavLink>
            <NavLink className="nav-link" to="about">Tentang Kami </NavLink>
            <NavLink className="nav-link" to="business">Lini Bisnis </NavLink>
            <NavLink className="nav-link" to="product">Produk Kami </NavLink>
            <NavLink className="nav-link" to="relation">Relasi Investor</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
