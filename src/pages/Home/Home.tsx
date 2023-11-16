/* eslint-disable react/button-has-type */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
// eslint-disable-next-line import/extensions
import Footer from "pages/Footer";
import img from "../../images/img_1.png";
import img1 from "../../images/img_2.png";
import img2 from "../../images/img_3.png";
import img3 from "../../images/img_4.png";
import img4 from "../../images/img_5.png";
import img5 from "../../images/img_6.png";
import img6 from "../../images/img_7.png";
import img7 from "../../images/img_8.png";
import img8 from "../../images/img_9.png";
import img9 from "../../images/img_10.png";
import img10 from "../../images/img_11.png";
import img11 from "../../images/img_12.png";
import img12 from "../../images/img_13.png";

export default function Home() {
  return (
    <div id="home">
      <div className="image">
        <img src={img} alt="ảnh" />
      </div>
      <div>
        <h2>Discover NEW Arrivals</h2>
        <h5>Recently added shirts!</h5>
      </div>
      <div className="img">
        <div className="img1">
          <img src={img1} alt="ảnh" />
          <h4>Carson Shoulder</h4>
          <p>$29.00</p>
        </div>
        <div className="img2">
          <img src={img2} alt="ảnh" />
          <h4>Denim Jacket </h4>
          <p>$69.00</p>
        </div>
        <div className="img3">
          <img src={img3} alt="ảnh" />
          <h4>Black Polo Shirt</h4>
          <p>$49.00</p>
        </div>
        <div className="img4">
          {" "}
          <img src={img4} alt="ảnh" />
          <h4>Blue Sweatshirt</h4>
          <p>$79.00</p>
        </div>
        <div className="img5">
          <img src={img5} alt="ảnh" />
          <h4>Blue Plain Shirt</h4>
          <p>$49.00</p>
        </div>
        <div className="img6">
          <img src={img6} alt="ảnh" />
          <h4>Dark Blue Shirt</h4>
          <p>$89.00</p>
        </div>
        <div className="img7">
          <img src={img7} alt="ảnh" />
          <h4>Outcast T Shirt</h4>
          <p>$19.00</p>
        </div>
        <div className="img8">
          <img src={img8} alt="ảnh" />
          <h4>Polo Plain Shirt</h4>
          <p>$29.00</p>
        </div>
      </div>
      <div className="base">
        <div className="base_car">
          <div>
            <LocalShippingOutlinedIcon />
          </div>
          <div className="h6">
            <p>Free Shipping</p>
            <p>Free shipping on all US order or order above $100</p>
          </div>
        </div>
        <div className="base_car1">
          <div>
            <HelpIcon />
          </div>
          <div className="h6">
            <p>SUPPORT 24/7</p>
            <p>Our support team is there to help you for queries</p>
          </div>
        </div>
        <div className="base_car2">
          <div>
            <KeyboardReturnIcon />
          </div>
          <div className="h6">
            <p>30 DAYS RETURN</p>
            <p>Simply return it within 30 days for an exchange.</p>
          </div>
        </div>
        <div className="base_car3">
          <div>
            <FingerprintIcon />
          </div>
          <div className="h6">
            <p>100% PAYMENT SECURE</p>
            <p>Our payments are secured with 256 bit encryption</p>
          </div>
        </div>
      </div>
      <div className="Rectangle_36">
        <div className="rectangle">
          <div className="peace">
            <h2>peace of mind</h2>
          </div>
          <div className="peace1">
            <h4>
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </h4>
          </div>
          <div>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="rectangle1">
          <div className="peace">
            <h2>Buy 2 Get 1 Free</h2>
          </div>
          <div className="peace1">
            <h4>
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </h4>
          </div>
          <div>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Top Sellers</h2>
        </div>
        <div>
          <h4>Browse our top-selling products</h4>
        </div>
      </div>
      <div>
        <div className="img">
          <div className="img10">
            <img src={img9} alt="ảnh" />
            <h4>Carson Shoulder</h4>
            <p>$49.00</p>
          </div>
          <div className="img11">
            <img src={img10} alt="ảnh" />
            <h4>Red Shirt</h4>
            <p>$69.00</p>
          </div>
          <div className="img12">
            <img src={img11} alt="ảnh" />
            <h4>Polo White Shirt</h4>
            <p>$29.00</p>
          </div>
          <div className="img13">
            <img src={img12} alt="ảnh" />
            <h4>Pink Casual Shirt</h4>
            <p>$39.00</p>
          </div>
        </div>
      </div>
      <div className="shopnow">
        <button>SHOP NOW</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
