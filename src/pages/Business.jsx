import React, { Component } from "react";
import Hero from "../assets/Hero Section/3.png";
import BusinessSection from "../components/BusinessSection";
import { DataSectionBusiness } from "../Data";
export default function Business() {
  return (
    <>
    <section className="hero-business mt-5 mt-md-0" id="business">
      <img className="d-block w-100" src={Hero} />
    </section>
    {DataSectionBusiness.map((business)=>(
      <BusinessSection nama={business.nama} url={business.url} id={business.id} desc={business.desc} link={business.link}/>
    ))}
    </>
  );
}
