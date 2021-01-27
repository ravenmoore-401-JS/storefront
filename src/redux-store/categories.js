let initialState = {
  // TODO this sholud be a list of unique categorys found by looking at current state of all items.
  categories: [
    { name: 'All', displayName: 'All' ,description:'all items are displaied here', active:true},
    { name: 'Yarn', displayName: 'Yarn' ,description:'Yarn Craft and crochets critters ',active:false},
    { name: 'Metal-Art', displayName: 'Metal-Art',description:'Metal fabrication art and scuptures',active:false },
  ],
  selected : {name: 'All', displayName: 'All' ,description:'all items are displaied here', active:true}
};

// actions
export const select = (name) => {
  return {
    type: 'SELECT',
    payload: name
  }
}

function categoriesReducer(state=initialState, action){
  let { type, payload } = action;
  switch (type) {

    case 'SELECT':
      console.log('SELECT',state)
      state.categories.map(category => {
        if(category.active) category.active=false;
        if(category.name === payload){
          category.active = true;
          state.selected.active = false;
          state.selected = category;
        }
        return category;
      });
      return {...state};
        
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default categoriesReducer;