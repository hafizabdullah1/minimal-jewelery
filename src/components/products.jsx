import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";

export default class Products extends React.Component {
  render() {
    return (
      <div>
        <div className="product">
          <div className="productdiv1">
            <div className="headfeat">
              <h1>FEATURED PRODUCTS</h1>
              <p>Top view in this week</p>
            </div>
            <ul className="productul">
              <li>FESTURED</li>
              <li>LATEST</li>
              <li>SPECIAL</li>
            </ul>
          </div>
          <div className="productdiv2">
            <div className="accu1">
              <div
                style={{
                  backgroundImage: "url('/img/buds.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",
                }}
              >
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
            </div>
            <div className="accu1 accu2">
              <div
                style={{
                  backgroundImage: "url('/img/tworing.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",
                }}
              >
                <div className="whitediv">
                  <div whiteicons>
                    <AiOutlineHeart />
                    <LiaEyeSolid />
                  </div>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <h2 className="heading2">Adipising Elit</h2>
              <p className="accup">
                $90.00 <del>$100.00</del>
              </p>
            </div>
            <div className="accu1 accu3">
              <div
                style={{
                  backgroundImage: "url('/img/goldring.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",
                }}
              >
                <div className="whitediv">
                  <div whiteicons>
                    <AiOutlineHeart />
                    <LiaEyeSolid />
                  </div>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <h2 className="heading2">Aliquam</h2>
              <p className="accup">
                $80.00 <del>$100.00</del>
              </p>
            </div>
            <div className="accu1 accu4">
              <div
                style={{
                  backgroundImage: "url('/img/chain.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",
                }}
              >
                <div className="whitediv">
                  <div whiteicons>
                    <AiOutlineHeart />
                    <LiaEyeSolid />
                  </div>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <h2 className="heading2">Anduillouie</h2>
              <p className="accup">$100.00</p>
            </div>
            <div className="accu1 accu5">
              <div
                style={{
                  backgroundImage: "url('/img/ring.png')",
                  backgroundSize: "100% 100%",
                  height: "82%",
                  width: "100%",
                }}
              >
                <div className="whitediv">
                  <div whiteicons>
                    <AiOutlineHeart />
                    <LiaEyeSolid />
                  </div>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <h2 className="heading2">Bima Zuma</h2>
              <p className="accup">$100.00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
