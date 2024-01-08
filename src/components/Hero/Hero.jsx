import React from "react";
import { Logo, Hamburger } from "@/assets/icons";
import Link from "next/link";
import "./Hero.css";
import Image from "next/image";
import Line from "../../icons/line.svg"
import Note from "../../icons/note.svg"

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
        <Image className="note" width={64} height={112} src={Note} alt="Note"/>
      </div>
      <button className="explore-button">EXPLORE</button>
      <Image className="curve" width={1367} height={768} src={Line} alt="Liner"/>
      </div>
    </div>
  );
};

export default Hero;
