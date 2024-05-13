import React from "react";
import { AiFillHome, AiOutlineOrderedList } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";

export default class Catagory extends React.Component {
  render() {
    return (
      <div>
        <div className="catagory">
          <div className="cat1">
            <div className="homeicons">
              <ul>
                <li>
                  <AiFillHome />
                </li>
                <li>
                  <BsChevronDoubleRight />
                </li>
                <li>Letraset</li>
              </ul>
            </div>
          </div>

          <div className="cat2">
            <div className="let1">
              <p>Categories</p>
              <ul className="letul">
                <li>Facilis(20)</li>
                <li>Mens(20)</li>
                <li>Volutrap Elit(20)</li>
                <li>Womens(20)</li>
                <li>Accessories(20)</li>
                <li>Kids(20)</li>
              </ul>
            </div>

            <div className="let2">
              <h1>Letraset</h1>
              <div className="letra1">
                <div className="select">
                  <AiOutlineOrderedList />
                  <FaThList />
                  <p>Show:</p>
                  <select name="" id="" className="option">
                    <option value="6">6</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                  </select>
                  <p>Product Compare(0)</p>
                </div>
                <div className="select select2">
                  <p>Sort By:</p>
                  <select name="" id="" className="option">
                    <option value="Default">Default</option>
                    <option value="Name">Name(A-Z)</option>
                    <option value="Name">Name(Z-A)</option>
                    <option value="75">Price(Low-High)</option>
                    <option value="100">Price(High-Low)</option>
                    <option value="100">Model(A-Z)</option>
                    <option value="100">Model(Z-A)</option>
                  </select>
                </div>
              </div>
              <div className="letra2">
              <div className="hover">
              <div
                style={{
                  backgroundImage: "url('/img/buds.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",border:"1px solid gray"
                }}>
                <div className="whitediv">
                  <div whiteicons>
                    <AiOutlineHeart />
                    <LiaEyeSolid />
                  </div>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <h2 className="heading2">Accuman Elit</h2>
              <p className="accup">
                $90.00 <del>$100.00</del>
              </p>
            </div>              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
