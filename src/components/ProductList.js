import React from 'react'
import classes from './ProductList.module.css'
import { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Product from './Product';
const ProductList = (props) => {
    const ref = useRef(null);  
       
    const scroll = () => {
        ref.current.scrollLeft += 250;
        
    };

  return (
  <div >
      <div className={classes.lineContainer}>
      <p className={classes.title}> {props.title}</p>
      <hr/>
      </div>
      
      <div className={classes.listConatiner}>
   
       <div className={classes.productsConatiner} ref={ref}>
        
       
        {
            props.list.map((v,i)=>(
                <Product key={i} data={v}/>
            ))
        }

       
   </div>
      
    
   <div>
       <ArrowForwardIosIcon  fontSize="large"   onClick={scroll}/>
   </div>
 </div>
 
  </div>
  )
}

export default ProductList