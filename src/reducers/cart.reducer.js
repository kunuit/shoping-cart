import * as Types from "../constants/ActionType.constant";


var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []

const cart = (state = initialState, action) => {
  var { product, quantity, id } = action
  var index = -1  // khong tim thay la -1,
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product.id)
      if (index !== -1) {
        state[index].quantity += quantity // theo id cua san pham trong gio hang
      }
      else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem('CART', JSON.stringify(state))
      return [...state]
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, id)
      if(index !== -1){
        state.splice(index, 1);
      }
      localStorage.setItem('CART', JSON.stringify(state))
      return [...state]
    default: return [...state]
  }
}

const findProductInCart = (cart, id) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if(cart[i].product.id === id){
        index = i
        break
      }
    }
  }
  return index
}


export default cart