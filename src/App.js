import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import "./App.css";

import store from "./store";

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter /> <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
