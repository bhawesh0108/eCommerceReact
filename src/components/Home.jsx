import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import {Link, useLocation} from 'react-router-dom'
import { productContext } from "../utils/Context";
import Loader from "./Loader";
import axios from "../utils/Axios";


const Home = () => {

  const [products] = useContext(productContext);
  const [filteredProducts,setFilteredProducts] = useState(products);

  const {search} = useLocation();

  let category = decodeURI(search.split("=")[1])
  
  const getCategoryProducts = async ()=>{
      //const {data} = await axios.get(`/products/category/${category}`);

      const data = products.filter((product)=>product.category == category)
      setFilteredProducts(data)
  }

  useEffect(()=>{

    if(products && category=='undefined')
    {
        setFilteredProducts(products)
    }
    if(category!= 'undefined')
    {
        getCategoryProducts()
    }
  },[category,products])

  return filteredProducts?(
    <>
      <Nav />
      <div className="w-[80%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto my-[3%]">

      {
        filteredProducts.map((product,index)=>(
            <Link key={product.id} to= {`/details/${product.id}`} className="card w-[18%] h-[32%] flex flex-col p-5 border rounded-md shadow mr-2 mb-3">
            <div
              className="h-[85%] w-full bg-cover bg-no-repeat bg-center bg-grey-200 hover:scale-110 transition ease-in-out"
              style={{
                backgroundImage:
                  `url(${product.image})`,
              }}
            ></div>
            <h2 className="text-grey-200 text-1xl leading-4 mt-5 hover:text-blue-300 transition ease-in-out">
              {product.title}
            </h2>
          </Link>
        ))
      
    }
      </div>
    </>
   
  ):(<Loader />);
};

export default Home;
