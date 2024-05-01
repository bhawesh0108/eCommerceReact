import React, { createContext, useEffect, useState } from 'react'
import axios from './Axios';

export const productContext = createContext();

const Context = (props) => {

  const [products,setProducts] = useState(null);

  const getProducts = async ()=>{
     // const {data} = await axios('/products')

     const data = JSON.parse(localStorage.getItem("products"))
     setProducts(data);
  }

  useEffect(()=>{

    getProducts();

  },[])
  
  return (
    <productContext.Provider value={[products,setProducts]}>{props.children}</productContext.Provider>
  )
}

export default Context