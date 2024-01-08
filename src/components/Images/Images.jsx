import "./Images.css";
import ImageFirst from "../../assets/images/info-img1.jpg";
import ImageSecond from "../../assets/images/info-img2.jpg";
import O from "../../icons/O.svg";
import Image from "next/image";

const Images = () => {
  return (
    <div className="container">
      <div class="images">
        <Image className="images-first" src={ImageFirst} width={700} alt="" />
        <Image className="images-second" src={ImageSecond} width={700} alt="" />
        {/* <Image src={O} alt="a" /> */}
      </div>
    </div>
  );
};

export default Images;
