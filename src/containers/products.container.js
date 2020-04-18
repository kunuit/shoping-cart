import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./../components/Products";
import Product from "./../components/Product";
import { actAddToCart, actChangeMessage } from "../actions/index.action";
import message from '../reducers/message.reducer';


class ProductsContainer extends Component {
  render() {
    // khai bao bien
    var { products } = this.props
    // the tuong tac JSX
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    )
  }
  // cac function thuc thi
  //* hien thi cac san pham
  showProducts(products) {
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props
    if (products.length > 0) {
      result = products.map((val, index) => {
        return <Product
                key={index}
                product={val}
                onAddToCart={onAddToCart}
                onChangeMessage = {onChangeMessage}
        />
      })
    }
    return result;
  }
}
// check proptypes of container
ProductsContainer.propTypes = {
  //products must array and not empty
  products: PropTypes.arrayOf(
    //check item in products
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired
}

// connect to redux de lay state trong store
const mapStateToProps = state => {
  return {
    products: state.products // state.products in product.reducer.js
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
