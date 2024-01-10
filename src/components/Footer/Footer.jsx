import Image from "next/image"
import Instagram from "../../icons/instagram.svg"
import Twitter from "../../icons/twitter.svg"
import Facebook from "../../icons/facebook.svg"
import Logo from "../../icons/logo.svg"
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="social-media">
            <Image src={Instagram} alt=""/>
            <Image src={Twitter} alt=""/>
            <Image src={Facebook} alt=""/>
        </div>
        <div className="content">
            <Image className="logo" src={Logo} alt=""/>
            <p>World of extraordinary flavors &<br />unrivaled mixology expertise</p>
        </div>
        <div className="copyright">
            <p>Copyright © 2023 XIDE</p>
            <p>Design by <span>XIDE</span></p>
        </div>
    </footer>
  )
}

export default Footer