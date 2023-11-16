import { Button, ButtonGroup, TextField } from "@mui/material";
import Footer from "pages/Footer";
import React from "react";

export default function CheckOut() {
  return (
    <>
      <div id="checkout">
        <div className="container_checkout">
          <div className="Hero">
            <span>
              <p className="hero_home">home /</p>
              <p className="hero_checkout">checkout</p>
            </span>
          </div>
          <div className="hero_h3">
            <h3>Billing details</h3>
          </div>
          <div className="container_tt">
            <div className="first_name">
              <div className="first_p">
                <p>Full Name*</p>
              </div>
              <div className="first_input">
                <TextField
                  id="outlined-password-input"
                  label="Full Name"
                  type="Full Name"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="street_address">
              <div className="street_p">
                <p>Street address*</p>
              </div>
              <div className="street_input">
                <TextField
                  id="outlined-password-input"
                  label="Full Name"
                  type="Full Name"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="town_city">
              <div>
                <p>Town / City*</p>
              </div>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Full Name"
                  type="Full Name"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="phone">
              <div>
                <p>Phone*</p>
              </div>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Full Name"
                  type="Full Name"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="email_address">
              <div>
                <p>Email address*</p>
              </div>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Full Name"
                  type="Full Name"
                  autoComplete="current-password"
                />
              </div>
            </div>
          </div>
          <div className="returning_customer">
            <div className="your_order">
              <h3>Your order</h3>
            </div>
            <div className="product_totals">
              <span className="product_p1">
                <p>Product</p>
              </span>
              <span>
                <p>Total</p>
              </span>
            </div>
            <div className="checkout_item">
              <span className="checkout_p1">
                <p>Plain White Shirt</p>
              </span>
              <span>
                <p>$59.00</p>
              </span>
            </div>
            <div className="subtotal">
              <span className="subtotal_p1">
                <p>Subtotal</p>
              </span>
              <span>
                <p>$59.00</p>
              </span>
            </div>
            <div className="subtotal_1">
              <span>
                <p>$59.00</p>
              </span>
            </div>
            <div className="cash_on_delivery">
              <div className="cash_on">
                <p>
                  Cash on delivery. Please contact us if you require assistance
                  or wish to make alternate arrangements.
                </p>
                <div className="cash_button">
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                  >
                    <Button>ADD TO CART</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
