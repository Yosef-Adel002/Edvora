import React from 'react';
import Body from '../components/Body';
import Sidebar from '../components/Sidebar';
import classes from './Home.module.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
const Home = () => {
const [productList,setProductList]= useState([])
const [products,setPrducts]= useState({})
  useEffect(()=>{
    axios.get("https://assessment-edvora.herokuapp.com").then((res)=>{
      let p = [];
      setProductList(res.data)
      var sortedProduct = res.data.reduce((obj,value) =>{
        let key =  value.brand_name;
        if (obj[key] != null){
         
          obj[key].push(value);

        }else{
          obj[key] = [];
          p.push(key)
          obj[key].push(value);
        }
         
        return obj;
      },{});
      setPrducts(sortedProduct)
    })
  },[])
  return (
  <div className={classes.home}> 
      <Sidebar productList={productList}/>
      <Body products= {products}/>
  </div>
  );
};

export default Home;
