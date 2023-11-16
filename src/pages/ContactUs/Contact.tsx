import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import Footer from "pages/Footer";
import img28 from "./imgaContact/img_28.jpg";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <div className="img_28">
          <img src={img28} alt="ảnh" />
        </div>
        <div className="form">
          <div>
            <div>
              <div className="form-h2">
                <h2>We would love to hear from you.</h2>
              </div>
              <div className="form-h4">
                <h4>
                  If you have any query or any type of suggestion, you can
                  contact us here. We would love to hear from you.
                </h4>
              </div>
            </div>
            <div className="send_massage">
              <div>
                <div className="input_name">
                  <div className="name">
                    Name
                    <input type="name" />
                  </div>
                  <div className="email">
                    Email
                    <input type="Email" />
                  </div>
                </div>
                <div className="input_message">
                  Message
                  <input type="Message" />
                </div>
              </div>
              <div className="button">
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                >
                  <Button>SEND MESSAGE</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="visit">
              <div>
                <h5>Visit Us</h5>
              </div>
              <div>
                <h6>
                  UET Lahore, Punjab, Pakistan <br /> Phone: +923039898987
                </h6>
              </div>
            </div>
            <div className="gettouch">
              <div>
                <h5>Get In Touch</h5>
              </div>
              <div>
                <h6>
                  You can get in touch with us on this provided email. <br />{" "}
                  Email: hmjawad087@gmail.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
