import React from 'react';
import classes from './Body.module.css'

import ProductList from './ProductList';
const Body = (props) => {
  return (
  <div className={classes.body}>
    <p className={classes.Brand}>Edvora</p>
    <p className={classes.title}>Products</p>
   {  
      Object.keys(props.products).map((key,i)=>(
        <ProductList key={i} title={key} list = {props.products[key]} />
  ))
   }

  </div>
  );
};

export default Body;
