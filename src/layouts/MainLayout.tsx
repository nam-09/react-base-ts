import React from "react";
import { Outlet, Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// eslint-disable-next-line import/no-extraneous-dependencies
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BaseLayout from "./BaseLayout";

export default function MainLayout() {
  return (
    <BaseLayout>
      <div className="navbar">
        <div className="logo">
          <h1>NorthStar</h1>
        </div>
        <div className="nav-elements">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/about" className="about">
            <h1>About</h1>
          </Link>
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
          {/* <Link to="/product">
            <h1>Product</h1>
          </Link>
          <Link to="/shoppingcart">
            <h1>ShoppingCart</h1>
          </Link>
          <Link to="/checkout">
            <h1>Checkout</h1>
          </Link> */}
        </div>
        <div className="search-cart">
          <PersonOutlineOutlinedIcon />
          <LocalMallOutlinedIcon />
          <MenuOutlinedIcon />
        </div>
      </div>
      <Outlet />
    </BaseLayout>
  );
}
