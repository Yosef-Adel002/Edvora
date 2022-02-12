import React from 'react'
import classes from './DropDown.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState, useEffect } from 'react';
const DropDown = (props) => {
    const [list ,setList] =useState([])
    const [show,setShow]= useState(false)
    const [select,setSelect] = useState(props.title)
    useEffect(()=>{
      let array=[];
      if(props.title === "Products"){
        props.list.map(v=> array.push(v.product_name) )
      }else if(props.title === "State"){
        if(props.selectedProduct){
          props.list.filter(p=> p.product_name === props.selectedProduct).map(v=> array.push(v.address.state) )
          const exist = array.find(e=> e === select);
          if(!exist){
            setSelect("State")
          }
        }else{
          props.list.map(v=> array.push(v.address.state) )
        }
        
      }else{
        if(props.selectedState){
          props.list.filter(p=> p.address.state === props.selectedState ).map(v=> array.push(v.address.city) )
          const exist = array.find(e=> e=== select);
          if(!exist){
            setSelect("City")
          }
        }else{
          props.list.map(v=> array.push(v.address.city) )
        }
      }
      let u = [...new Set(array)]
      setList(u)
    },[props])
  return (
    <div className={classes.dropdown}>
        <div className={classes.dropdownselect} onClick ={() => setShow(!show)}>
        <span className={classes.select}>{select}</span>
        <ArrowDropDownIcon/>
        </div>
        <div className={classes.list}>
        {show&&
         <div className={classes.dropdownlist}>
          {
            list.map((v,i)=>(
              <div key= {i}  className={classes.dropdownlistitem} onClick={ ()=> {props.selectHandler(v); setSelect(v) ;setShow(!show)}   } > {v}</div>
            ))
          }
         </div>}
        </div>
      
    </div>
  )
}

export default DropDown