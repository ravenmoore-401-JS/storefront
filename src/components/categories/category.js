import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../redux-store/categories';

const mapDispatchToProps = { select };

function Categories(props){
  console.log('cat props',props)

  const selectCategory = (name) => {
    console.log('selected name',name)
    console.log('user picked category', name);
    props.select(name);
  }
  
  return(
    <div id='category-list'>
      categories:
    {props.categories.map((category,idx)=> (
      <div key={idx}>
        <a href={category.name} onClick={()=>selectCategory(category.name)} >{category.displayName}</a>
      </div>
    ))}
    </div>
  )
}

const mapStateToProps = state => ({
   categories: state.categoriesReducer.categories,
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);