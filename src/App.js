import React, { Component } from 'react';
import Header   from "./components/Header";
import CartContainer  from "./containers/cart.container";
import MessageContainer  from "./containers/message.container";
import Footer   from "./components/Footer";
import ProductsContainer from "./containers/products.container";

class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <main id="mainContainer">
          <div className="container">
            <ProductsContainer/>
            <MessageContainer />
            <CartContainer />

          </div>
        </main>
        <Footer />
      </div>
    );

  }
}

export default App;
