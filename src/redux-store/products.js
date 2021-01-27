let initialState = {
  // TODO this should be loaded from an api or storage somewhere maybe even a json,
  products: [
    { id:1, name: 'Dragon', description: 'hand crafted Crochet Dragon' ,category:'Yarn', price:'225',count:1, image:'./public/images/store-img-sm/dragon-sm.jpg'},
    { id:2, name: 'Rose', description: 'Metal fabricated roses' ,category:'Metal-Art', price:'95',count:12, image:'./public/images/store-img-sm/rose-sm.jpg'},
    { id:3, name: 'Fish', description: 'an green and purple x-ray fish' ,category:'Yarn', price:'55',count:1},
    { id:4, name: 'wand', description: 'Steel wand hand twisted and forged from rebar' ,category:'Metal-Art', price:'33',count:3, image:'./public/images/store-img-sm/wand-sm.jpg'},
    { id:4, name: 'necklace', description: 'wire wraped stone necklace' ,category:'Metal-Art', price:'45',count:1, image:'./public/images/store-img-sm/necklace-sm.jpg'}
  ]
};

// actions
export const details = (id) => {
  return {
    type: 'DETAILS',
    payload: id
  }
}

export const sort = (category) =>{
  return{
    type: 'SORT',
    payload : category
  }
}

function productsReducer(state=initialState, action){
  let { type, payload } = action;


  switch (type) {

    case 'DETAILS':
      console.log('clicked details for',payload)
     
      return {state};

    case 'SORT':
      console.log('clicked details for',payload)
    
      return {state};
      
    default:
      return state;
  }
}

export default productsReducer;