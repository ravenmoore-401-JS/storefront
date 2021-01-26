let initialState = {
  categories: [
    { name: 'All', displayName: 'all' ,active:true},
    { name: 'Yarn', displayName: 'yarn' ,active:false},
    { name: 'Critters', displayName: 'Critters',active:false },
    { name: 'Metal-Art', displayName: 'Metal-Art',active:false },
  ]
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
      let selectedCategory = state.categories.map(category => {
        if(category.name === payload){
          return {category}
        }
        return {selectedCategory};
      });break
        
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default categoriesReducer;