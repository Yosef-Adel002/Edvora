import React from 'react'
import classes from './Product.module.css'
const Product = (props) => {
  
  return (
    
    <div className={classes.product}>
        <div className= {classes.Container}>
           <div className={classes.imgContainer}>
           <img src={props.data.image} alt="product"/>
           </div>
           <div>
            <p className={classes.title}>{props.data.product_name}</p>
            <p className={classes.font2}>{props.data.brand_name}</p>
            <p className={classes.price} > <span>$ </span>{props.data.price}</p>
           </div>
        </div>
        <div className= {classes.Container} >
            <p className={classes.font2}>{`${props.data.address.city} / ${props.data.address.state}`}</p>
            <p className={classes.font1}>Date: <span>{props.data.date.slice(0,10)}</span></p>
        </div>
        <div>
            <p className={classes.font1}>{props.data.discription}</p>
        </div>
    </div>
  )
}

export default Product