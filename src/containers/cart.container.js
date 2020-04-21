import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../constants/Message.constant";
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from "../actions/index.action";

class CartContainer extends Component {
  render() {
    // khai bao bien
    var {cart } = this.props
    // the tuong tac JSX
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    )
  }
  // cac function thuc thi
  showCartItem = (cart) => {
    var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
    var result = <tr>
        <td>
        {Message.MSG_CART_EMPTY}
        </td>
    </tr>;
    if(cart.length > 0){
      result = cart.map((item, index) => {
        return (
          <CartItem 
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        )
      })
    }
    return result
  }

  showTotalAmount = (cart) => {
    var result = null;
    if(cart.length > 0){
      result = <CartResult cart={cart}/>
    }
    return result
  }
}
// check proptypes of container
CartContainer.propTypes = {
  // check cart
  cart: PropTypes.arrayOf(
    //check item in cart
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired
}

// connect to redux de lay state trong store
const mapStateToProp = state => {
  return{
    cart: state.cart 
  }
}

const mapDispatchToProp = (dispatch, props) => {
  return {
    onDeleteProductInCart: (id) => {
      dispatch(actDeleteProductInCart(id))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product,quantity))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(CartContainer);
