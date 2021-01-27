import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../redux-store/categories';

const mapDispatchToProps = { select };

function Categories(props){

  const selectCategory = (name) => {
    console.log('selected name',name)
    props.select(name);
  }
  
  return(
    <div id='category-list'>
      categories:
    {props.categories.map((category,idx)=> (
        <Button key={idx} onClick={()=>selectCategory(category.name)}>{category.displayName}</Button>
    ))}
    </div>
  )
}

const mapStateToProps = state => ({
   categories: state.categoriesReducer.categories,
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);