let initialState = {
  // TODO this should be loaded from an api or storage somewhere maybe even a json,
  products: [
    { id:1, name: 'Dragon', description: 'hand crafted Crochet Dragon' ,category:'Yarn', price:'225',count:1},
    { id:2, name: 'Rose', description: 'Metal fabricated roses' ,category:'Metal-Art', price:'95',count:12},
    { id:3, name: 'Fish', description: 'an green and purple x-ray fish' ,category:'Yarn', price:'55',count:1},
    { id:4, name: 'wand', description: 'Steel wand hand twisted and forged from rebar' ,category:'Metal-Art', price:'33',count:3},
    { id:4, name: 'necklace', description: 'wire wraped stone necklace' ,category:'Metal-Art', price:'45',count:1}
  ]
};

// actions
export const details = (id) => {
  return {
    type: 'DETAILS',
    payload: id
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADDTOCART',
    payload: item
  }
}
// TODO create cart reducer to manage cart state

function productsReducer(state=initialState, action){


  let { type, payload } = action;

  // TODO sort by activeSelection here and assign to state... then do action on current selection

  switch (type) {

    case 'DETAILS':
      console.log('clicked details for',payload)
     
      return {state};

    case 'ADDTOCART':
      console.log('clicked add to cart with item',payload)
      
      return {state};
      
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default productsReducer;