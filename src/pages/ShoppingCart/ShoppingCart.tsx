import { Button, ButtonGroup } from "@mui/material";
import Footer from "pages/Footer";
import React from "react";

export default function ShoppingCart() {
  return (
    <>
      <div id="shoppingcart">
        <div className="shopping_span">
          <span>
            <p>home /</p>
            <p className="shop_p">shopping cart</p>
          </span>
        </div>
        <div className="container_shoppingcart">
          <div className="header_shopp">
            <div className="product_1">
              <div>
                <h6>Product</h6>
              </div>
              <div>
                <p>Plain White Shirt</p>
              </div>
            </div>
            <div className="price_1">
              <div>
                <h6>Price</h6>
              </div>
              <div>
                <p>$59.00</p>
              </div>
            </div>
            <div className="quantity_1">
              <div>
                <h6>Quantity</h6>
              </div>
              <div>
                <p>1</p>
              </div>
            </div>
            <div className="total_1">
              <div>
                <h6>Total</h6>
              </div>
              <div>
                <p>$59.00</p>
              </div>
            </div>
          </div>
          <div className="carttotals_h2">
            <h2>Cart Totals</h2>
          </div>
          <div className="cart_totals">
            <div className="subtotal_1">
              <div>
                <h5>Subtotal</h5>
              </div>
              <div>
                <p>$59.00</p>
              </div>
            </div>
            <div className="shipping_free">
              <div>
                <h5>Shipping Free</h5>
              </div>
              <div>
                <p>FREE!!!</p>
              </div>
            </div>
            <div className="carttotals_total">
              <div>
                <h5>Total</h5>
              </div>
              <div>
                <p>$59.00</p>
              </div>
            </div>
            <div className="carttotals_button">
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button className="cart_proceed">Proceed to Checkout</Button>
              </ButtonGroup>
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
