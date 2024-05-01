import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import {Link} from 'react-router-dom'
import Loader from './Loader'

const Nav = () => {
 
  const [products] = useContext(productContext)

  let distinctCategories = products && products.reduce((accumulator,product)=>[...accumulator,product.category],[])
  distinctCategories = [...new Set(distinctCategories)]

  const color = ()=>{
    return (
        `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
    )
  }

  return products?(
    <nav className='w-[20%] h-full bg-zinc-200 flex flex-col p-5 pt-10'>
    <Link to="/create" className='border border-blue-200 rounded text-blue-400 py-2 px-1' href="">Add More Product</Link>
    <hr className='w-[80%] my-3 bg-grey-200' />
    <h1 className='w-[80%] text-2xl mb-5 text-left'>Category Filter</h1>
    <div className='w-[80%] flex flex-col'>
        { distinctCategories.map((category,index)=>{
            return   <Link key={index} to={`/?category=${category}`} className='mb-3 text-left'><span style={{background:color()}} className='h-[15px] w-[15px] rounded-full inline-block mr-2'></span>{" "}{category}</Link>
        })}
     
    
    </div>
   </nav>
  ):(<Loader />)
}

export default Nav