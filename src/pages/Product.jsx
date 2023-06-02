import React, { Component } from "react";
import Hero from "../assets/Hero Section/4.jpg";
import { DataSectionProduct } from "../Data";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ProductSection from "../components/ProductSection";
export default function Product(props) {
  const data=props.data
  const lang=props.lang
  return (
    <>
      <section className="hero-product mt-5 mt-md-0 mb-5" id="product">
        <div
          className="d-block vh-100 mx-auto d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ><Container>
        <Row>
          <h1
            className="display-1 text-center"
            style={{ color: "rgb(249, 177, 49)" }}
          >
          {lang==='id'?'PRODUK KAMI':'OUR PRODUCTS'}
            {}
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
      </section>

      {data.sectionProduct.map((product) => (
        <ProductSection
          nama={product.nama}
          url={product.url}
          id={product.id}
          desc={product.desc}
        />
      ))}
    </>
  );
}
