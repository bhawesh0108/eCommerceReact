import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { productContext } from '../utils/Context'
import axios from '../utils/Axios'
import Loader from './Loader'
const Details = () => {

  const {id} = useParams()
  const[products,setProducts] = useContext(productContext)
  const [product,setProduct] =  useState(null);
  const navigate = useNavigate()
  
  const getSingleProduct = async ()=>{
    
   // const {data} = await axios.get(`/products/${id}`)

    const data = products.filter((product)=>product.id == id)[0]
    setProduct(data);
  }

  const deleteProductHandler = ()=>{
    const newProducts = products.filter((product)=>product.id!= id)
    setProducts(newProducts)
    localStorage.setItem("products",JSON.stringify(newProducts));
    navigate("/")
  }

  useEffect(()=>{
      getSingleProduct();

  },[products])

  return product?(

    <div className="w-[80%] h-full mx-auto flex py-20 px-10">
        <img className='mr-5 h-[70%] w-[60%] object-cover' src={product.image} alt="" />
        <div className='w-[40%] text-left'>
            <h1 className='text-3xl font-bold mb-3'>{product.title}</h1>
            <h2 className='text-zinc-400 mb-4'>$ {product.price}</h2>
            <h2 className='text-2xl mb-5'>{product.category}</h2>
            <h2 className='text-1xl mb-10'>{product.description}</h2>
            <Link to={`/edit/${product.id}`} className='w-[30%] border border-blue-200 rounded text-blue-400 py-2 px-1 mr-3 inline-block text-center text-1xl'>Edit</Link>
            <button onClick={deleteProductHandler}  className='w-[30%] border border-red-200 rounded text-red-400 py-2 px-1 inline-block text-center text-1xl'>Delete</button>
        </div>

    </div>
  ):(<Loader />)
}

export default Details