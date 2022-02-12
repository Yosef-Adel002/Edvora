import React from 'react';
import DropDown from './DropDown';
import classes from './Sidebar.module.css'
import { useState } from 'react';
const Sidebar = (props) => {
  console.log(props.productList);
  const [selectProduct , setSelectProduct] = useState("");
  const [selectState , setSelectState] = useState("");
  const selectStateHandler = (data)=>{
    setSelectState(data)
  }
  const selectProductHandler = (data)=>{
    setSelectProduct(data);
  }
  const selectCityHandler = (data)=>{
    
  }
  return (
  <div className={classes.sidebar}>
    <div className={classes.conatiner}>
        <div className={classes.header}>
            <p>Filters</p>
            
        </div>
       
        <hr/>
        <div className={classes.DropDown}>
        <DropDown title = "Products" list={props.productList} selectHandler={selectProductHandler}/>
        <DropDown title = "State" list={props.productList} selectedProduct ={selectProduct} selectHandler={selectStateHandler}/>
        <DropDown title = "City" list={props.productList} selectedState ={selectState} selectHandler={selectCityHandler} />
        </div>
        
    </div>
  </div>
  );
};

export default Sidebar;
