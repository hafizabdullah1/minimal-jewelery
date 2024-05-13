import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { AiFillHome } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";


export default class Bima extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div style={{ backgroundColor: "white", padding: "30px 120px", boxSizing: "border-box" }}>



                    <div style={{
                        height: "8vh",
                        width: "100%",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"


                    }}>
                        <h2 style={{ opacity: "0.8", fontWeight: "normal" }}>Andouille eu</h2>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "10px 10px",
                            cursor: "pointer"
                        }}>
                            <AiFillHome style={{ fontSize: "13px" }} />
                            <BsChevronDoubleRight style={{ fontSize: "13px" }} />
                            <span style={{ fontSize: "13px" }}>Andouille eu</span>
                        </div>
                    </div>

                    <div className="add">
                        <div className='atem'>
                            <div></div>
                            <img src="https://opencartdemo.multipurposethemes.com/oc025/oc02/image/cache/catalog/Data/product/product-13-800x800.png" alt="" />
                        </div>
                        <div className='priceSec'>
                            <h1>$100.00</h1>
                            <h5>Ex Tax:$100.00</h5>
                            <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> &nbsp; 0 reviews | Write a review</p>
                            <ul>
                                <li>Brand: Hewlett-Packard</li>
                                <li>Product Code:Product 21</li>
                                <li>Availability:In Stock</li>
                            </ul>
                            <label htmlFor="Qty">Qty
                                <input type="text" value='1' />
                            </label>
                            <br />
                            <button>ADD TO CART</button>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            <hr />
                        </div>
                        <div className='delivery'>
                            <div className="girl"></div>
                            <p>
                                This is a static CMS block edited from theme admin panel.You can insert ant content (text, images, HTML)) here. Lorem ipsum dolor sit amet, consectetur adipiscing elit porta.</p>

                            <button>FREE GROUND SHIPPING
                                ON ALL ORDERS OVER $50</button>
                            <button>
                            30-DAY MONEY-BACK
                            GUARANTEE FOR EACH PRODUCT
                            </button>
                            <button>
                            FREE BONUS GIFTS
                            WITH EVERY ORDER
                            </button>
                        </div>
                    </div>


<hr style={{
    border:"none",
    borderTop:"1px solid rgba(0,0,0,0.2)"
}} />

<div className="review">
<ul>
    <li>Description</li>
    <li>Specification</li>
    <li>Review(0)</li>
</ul>

<p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.</p>

</div>

<div className="related">
    <h1>RELATED PRODUCTS</h1>
    <div className="tira">
        <div>
                <img src="https://opencartdemo.multipurposethemes.com/oc025/oc02/image/cache/catalog/Data/product/product-14-250x250.png" alt="" />
                <h3>BIMA ZUMA</h3>
                <h5>$100.00</h5>
        </div>
        <div>
                <img src="https://opencartdemo.multipurposethemes.com/oc025/oc02/image/cache/catalog/Data/product/product-13-250x250.png" alt="" />
                <h3>BIMA ZUMA</h3>
                <h5>$100.00</h5>
        </div>
        <div>
                <img src="https://opencartdemo.multipurposethemes.com/oc025/oc02/image/cache/catalog/Data/product/product-14-250x250.png" alt="" />
                <h3>BIMA ZUMA</h3>
                <h5>$100.00</h5>
        </div>
        <div>
                <img src="https://opencartdemo.multipurposethemes.com/oc025/oc02/image/cache/catalog/Data/product/product-14-250x250.png" alt="" />
                <h3>BIMA ZUMA</h3>
                <h5>$100.00</h5>
        </div>
    </div>
</div>




                </div>
                <Footer />
            </>
        )
    }
}
