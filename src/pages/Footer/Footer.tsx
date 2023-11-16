/* eslint-disable import/extensions */
import React from "react";
import img14 from "./imgfooter/img_14.png";
import img15 from "./imgfooter/img_15.png";
import img16 from "./imgfooter/img_16.png";
import img17 from "./imgfooter/img_17.png";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div>
          <div>
            <h4>Company info</h4>
          </div>
          <div>
            <ul>
              <li>About Us Shop</li>
              <li>Latest Posts</li>
              <li>Contact Us</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4>help links</h4>
          </div>
          <div>
            <ul>
              <li>Tracking</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4>useful links</h4>
          </div>
          <div>
            <ul>
              <li>Special Offers</li>
              <li>Gift Cards</li>
              <li>Advetising</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4>get in the know</h4>
          </div>
          <div>
            <input type="Enter email" />
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="bottom">
          <div className="DeoThemes">
            <h6>© 2020 eCommerce, Made by DeoThemes.</h6>
          </div>
          <div>
            <h6>Privacy Policy Terms & Conditions</h6>
          </div>
        </div>
        <div>
          <div className="imga">
            <img src={img14} alt="ảnh" />
            <div className="img_15">
              <img src={img15} alt="ảnh" />
            </div>
            <div className="img_16">
              <img src={img16} alt="ảnh" />
            </div>
            <img src={img17} alt="ảnh" />
          </div>
        </div>
      </div>
    </div>
  );
}
