import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layouts/Main.css";
import "./pages/Home/home.css";
import "./pages/Footer/footer.css";
import "./pages/About/Aboutt.css";
import "./pages/ContactUs/Contact.css";
import "./pages/Single_Product/product.css";
import "./pages/ShoppingCart/shoppingCart.css";
import "./pages/Checkout/Checkout.css";
import { Provider } from "react-redux";
import store, { persistor } from "pages/Store/store";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PersistGate } from "redux-persist/integration/react";
// import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
