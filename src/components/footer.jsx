import React from "react"
import {BiLogoFacebook, BiLogoGooglePlus,BiSolidPhoneCall} from "react-icons/bi"
import {AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from "react-icons/ai"
import {SiAdobephotoshop} from 'react-icons/si'
import {BsFillSendFill, BsFillEnvelopeFill} from "react-icons/bs"


export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="foot1">

            <div className="com1">
              <p>Company</p>
              <hr />
              <ul className="comul">
                <li>About Us</li>
                <li>Conatact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Support Center</li>
              </ul>
            </div>

            <div className="com1 com2">
              <p>Questions?</p>
              <hr />
              <ul className="comul">
                <li>About Us</li>
                <li>Conatact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Support Center</li>
              </ul>
            </div>


            <div className="com1 com3">
            <p>Useful Links</p>
<hr />
<ul className='comul'>
    <li>About Us</li>
    <li>Conatact Us</li>
    <li>Privacy Policy</li>
    <li>Terms & Conditions</li>
    <li>Support Center</li>
</ul>
            </div>


            <div className="com1 com4">
  <p>Connect With Us</p>
<hr />
<ul className='comul comul4'>
    <li><BiLogoFacebook className="iconi"/><AiOutlineInstagram className="iconi"/><AiOutlineTwitter className="iconi"/><SiAdobephotoshop className="iconi"/><AiFillLinkedin className="iconi"/><BiLogoGooglePlus className="iconi"/></li>
    <li style={{opacity:0}}></li>
    <li><BsFillSendFill/> 123Lorem,Ipsum,India</li>
    <li><BsFillEnvelopeFill/> info@demo.com</li>
    <li><BiSolidPhoneCall/> 123 456 7890</li>
</ul>
            </div>
          </div>


          <div className="foot2">
            <div className="images">
                <img src="/img/card-1.png" alt="" />
                <img src="/img/card-2.png" alt="" />
                <img src="/img/card-3.png" alt="" />
                <img src="/img/card-4.png" alt="" />
                <img src="/img/card-5.png" alt="" />
                <img src="/img/card-6.png" alt="" />
                <img src="/img/card-7.png" alt="" />

            </div>
          </div>
          <div className="foot2 foot3">
            <p>Minimal Jwellery © 2023. Made with  by Multipurposethemes.</p>
          </div>
        </div>
      </div>
    );
  }
}
