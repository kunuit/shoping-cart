import React, { Component } from 'react';
import * as Message from "../constants/Message.constant";

class CartItem extends Component {
  render() {
    var { item } = this.props
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
              <a href="true">—</a>
            </label>
            <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
              <a href="true">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip" 
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={ () => {this.onDelete(item.product.id)}}
            >
            X
                    </button>
        </td>
      </tr>
    );
  }

  onDelete = (id) => {
    var { onDeleteProductInCart, onChangeMessage } = this.props
    onDeleteProductInCart(id )
    onChangeMessage(Message.MSG_DELETE_SUCCESS)
  }

  showSubTotal = (price, quantity) => {
    return price * quantity
  }
}

export default CartItem;
