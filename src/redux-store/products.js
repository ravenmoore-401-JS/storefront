let initialState = {
  // TODO this should be loaded from an api or storage somewhere maybe even a json,
  products: [
    { id:1, name: 'Dragon', description: 'hand crafted Crochet Dragon' ,category:'Yarn', price:'300',count:5},
    { id:1, name: 'Rose', description: 'Metal fabricated roses' ,category:'Metal-Art', price:'95',count:12},
    { id:1, name: 'Fish', description: 'an green and purple x-ray fish' ,category:'Yarn', price:'70',count:1},
    { id:1, name: 'wand', description: 'Steel wand hand twisted and forged from rebar' ,category:'Metal-Art', price:'40',count:3}
  ]
};

// actions
export const details = (id) => {
  return {
    type: 'DETAILS',
    payload: id
  }
}

function productsReducer(state=initialState, action){
  let { type, payload } = action;
  switch (type) {

        
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default productsReducer;