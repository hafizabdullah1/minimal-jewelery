import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHandbagFill, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="navdiv1">
            <ul className="ul1">
             
               <Link to='/'  className="li1">  <li>HOME</li></Link>


          <Link to='/Men' className="li1">   <li className="li2 lidiv">
                MENS
                <div className="mendiv menuu">
                  <div className="menul1"></div>

                  <div className="menul2">  
                    <ul>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        <Link to="/Kid">Facilis</Link>
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ethiam
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ethiam nec
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Donec Tempus
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ethiam nec
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Erat
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Accessories
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ethiam
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        <Link to='/Women'>Women</Link>
                      </li>
                    </ul>
                  </div>



                  <div className="menul3">
                    <p className="pmens">MENS</p>
                    <ul className="mensul1">
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Miren Tuken
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Elite
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ilet
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Kids
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Eturdum
                      </li>
                    </ul>

                    <p className="pmens">Facilis</p>
                    <ul className="mensul1">
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Miren Tuken
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Elite
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ilet
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Kids
                      </li>
                    </ul>
                  </div>

                  <div className="menul3 menul4">
                    <p className="pmens">ACCESSORIES</p>
                    <ul className="mensul1">
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Miren Tuken
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Elite
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ilet
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Kids
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Eturdum
                      </li>
                    </ul>

                    <p className="pmens">WOMEN</p>
                    <ul className="mensul1">
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Miren Tuken
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Elite
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Ilet
                      </li>
                      <li>
                        <BsChevronDoubleRight className="iconss" />
                        Kids
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              </Link> 


              
           <Link to='/Women' className="li1">   
           <li className="li2 li33">WOMEN
              <div className="mendiv wome">
                <div className="wodiv1">
                    <Link to='/Bima'>
                    <img src="/img/ring.png" alt="" />
                    <h6>Bima Zuma</h6>
                    <p>$100.0</p>
                    </Link>
                </div>

                <div className="wodiv1 wodiv2">
                <Link to="/Bima">
                <img src="/img/earing.png" alt="" />
                    <h6>Facilis</h6>
                    <p>$1100.0</p>
                </Link>
                </div>

                <div className="wodiv1 wodiv3">
                <img src="/img/ring2.png" alt="" />
                    <h6>Alliquam</h6>
                    <p>$900.0</p>
                </div>

                <div className="wodiv1 wodiv4">
                <img src="/img/chain.png" alt="" />
                    <h6>Anduoilue</h6>
                    <p>$800.0</p>
                </div>
              </div>
              </li>
              </Link>




             <Link to="/Kid" className="li1"> <li className="li2 li4">KIDS
              <div className="mendiv menmain">
                <div className="kiddiv1">
                    <div className="subdiv1">
                        <Link to='/Kid'>
                        <img src="/img/earing.png" alt="" />
                        <p>Accumsan Elit</p>
                        </Link>
                    </div>

                    <div className="subdiv1 subdiv2">
                   <Link to='?Women'>
                   <img src="/img/smallring.png" alt="" />
                        <p>Adipiscing Elit</p>
                   </Link>
                    </div>

                    <div className="subdiv1 subdiv3">
                    <img src="/img/bigring.png" alt="" />
                        <p>Aliquam Consequat</p>
                    </div>

                    <div className="subdiv1 subdiv4">
                    <img src="/img/tworing.png" alt="" />
                        <p>Letraset Sheets</p>
                    </div>
                </div>
               <div className="kiddiv22"> 
               <img src="/img/Locket.png" alt="" />
               <img src="/img/Rings.png" alt="" /></div>
              </div>
              </li>
              </Link>


              <li className="li2 li5">FEATURES
              <div className="mendiv featurediv">

                <div className="feat1">
                    <p className="featp">Theme Features</p>
                    <ul className="featul">
                        <li>Mega Menu</li>
                        <li>Page Builder</li>
                        <li>Custom Module</li>
                        <li>Custom Builder</li>
                    </ul>
                </div>

                <div className="feat2">
                <p className="featp">Product Style</p>
                    <ul className="featul">
                        <li>Zoom Image</li>
                        <li>Social Image</li>
                    </ul>
                </div>

                <div className="feat3">
                <p className="featp">Shop Style</p>
                    <ul className="featul">
                        <li>Car Info</li>
                        <li>List View</li>
                        <li>Grid View</li>
                    </ul>
                </div>

                <div className="feat4">
                <p className="featp">Shop Pages</p>
                    <ul className="featul">
                        <li>Sidebar Right</li>
                        <li>Sidebar Left</li>
                        <li>Without Sidebar</li>
                        
                    </ul>
                </div>
              </div>
              </li>
            </ul>
          </div>

          <div className="navdiv2">
            <h1>MINIMAL</h1>
          </div>

          <div className="navdiv1 navdiv3">
            <ul className=" ul1 ul2">
              <li className="li1">ENGLISH/USD</li>
              <li className="li2">LOGIN/REGISTER</li>
              <li className="li3">WISHLIST(0)</li>
              <li className="li4" style={{width:"50px"}}>
                <AiOutlineSearch style={{ fontSize: "20px",borderRight:"1px solid white",paddingRight:"3px"}} />
                <BsFillHandbagFill style={{ fontSize: "23px",paddingLeft:"3px"}} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
