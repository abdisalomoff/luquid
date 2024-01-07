import React from "react";
import { Logo, Hamburger, Note } from "@/assets/icons";
import Link from "next/link";
import "./Hero.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="container">
      <header className="hero-header">
        <Link className="logo-link" href="/">
          {Logo}
        </Link>
        <button className="hamburger-btn">{Hamburger}</button>
      </header>
      <div className="hero-content">
        <p className="indulge-text">Indulge in</p>
        <h2 className="hero-title">Liquid<br />Artistry</h2>
        <p className="hero-description">Step into a world of<br />extraordinary flavors and<br />unrivaled mixology expertise</p>
        <Link className="note-image" href="/">{Note}</Link>
      </div>
      <button className="explore-button">EXPLORE</button>
      <Image className="curve" width={1367} height={768} src="line.svg" alt="Liner"/>
      </div>
    </div>
  );
};

export default Hero;
