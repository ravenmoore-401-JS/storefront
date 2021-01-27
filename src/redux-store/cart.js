let initialState = {
  // TODO this should be loaded from an api or storage somewhere maybe even a json,
  products: [],
  cartTotal: 0,
  cartCount: 0
};
// actions ===================================
export const removeItem = (item) => {
  return {
    type: 'REMOVE',
    payload: item
  }
}
// cart amount(total cost of items in the cart)
export const emptyCart = () => {
  return {
    type: 'EMPTYCART',
    // payload: price
  }
}
export const addToCart = (item) => {
  return {
    type: 'ADDTOCART',
    payload: item
  }
}
// =============================================
function cartReducer(state=initialState, action){
  let { type, payload } = action;

  switch (type) {
    
    // case '':
    //   console.log(,payload)
    //   return {status};
    
    case 'REMOVE':
      console.log('clicked to remove items', payload)
      return {state};

    case 'ADDTOCART':
      console.log('clicked to remove items', payload)
      return {state};

    case 'EMPTYCART':
      console.log('clicked to remove items', payload)
      return {state};
        
    default:
      console.log(,state)
      return state;
  }
}

export default cartReducer;