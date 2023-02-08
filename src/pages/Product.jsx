import React, { Component } from "react";
import Hero from "../assets/Hero Section/4.png";
import { DataSectionProduct } from "../Data";
import ProductSection from "../components/ProductSection";
export default function Product() {
  return (
    <>
      <section className="hero-product mt-5 mt-md-0 mb-5" id="product">
        <img className="d-block w-100" src={Hero} />
      </section>

      {DataSectionProduct.map((product) => (
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
