
import Image from 'next/image';
import React from 'react';
import "./Intro.css";
import BarSpoon from "../../icons/bar-spoon.svg";
import IntroBg from "../../assets/images/intro-bg.jpg";
import A from "../../icons/A.svg";

const Intro = () => {
  return (
    <div className="intro-wrapper">
        <div className="intro-content">
            <Image width={16} height={102}  className="spoon-icon" src={BarSpoon} alt="bar"/>
            <Image width={260} height={390} className="charlotte-image" src={IntroBg} alt="charlotte"/>
            <p className="intro-description">Liquid Maestro, the newest hotspot in downtown Los Angeles. Our skilled mixologists are passionate about crafting exceptional cocktails that will delight your senses.</p>
            <p className="intro-seconddescription">With an ambiance that exudes elegance and a commitment to delivering unforgettable experiences, Liquid Maestro is the ultimate destination for cocktail enthusiasts. Join us for an exquisite journey into the world of liquid artistry.</p>
            <Image width={900} height={915} className="a-icon" src={A} alt="a"/>
        </div>
    </div>
  )
};

export default Intro;
