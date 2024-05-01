import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { productContext } from '../utils/Context';


const Edit = () => {
  
  const [products, setProducts] = useContext(productContext)
  const [product,setProduct] = useState({
    title:"",
    image:"",
    price:0,
    category:"",
    description:""
  })

  const navigate = useNavigate()

  const {id} = useParams()

//   const [title, settitle] = useState("");
//   const [image, setimage] = useState("");
//   const [price, setprice] = useState(0);
//   const [category, setcategory] = useState("");
//   const [description, setdescription] = useState("");

  useEffect(()=>{

    const data = products.filter((product)=>product.id == id)[0]
    setProduct(data)


  },[id])




  const createProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.length < 5 ||
      product.image.length < 5 ||
      product.price.length < 1 ||
      product.category.length < 5 ||
      product.description.length < 5
    ) {
      alert("Please fill all the fields");
    } else {
    
      const copyData = products.filter((product)=>product.id != id)

      setProducts([...copyData,product])
      localStorage.setItem("products",JSON.stringify([...copyData,product]));
      navigate("/")
    }
      
}

const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setProduct({...product,title:value})
        break;
      case "image":
        setProduct({...product,image:value})
        break;
      case "price":
        setProduct({...product,price:value})
        break;
      case "category":
        setProduct({...product,category:value})
        break;
      case "description":
        setProduct({...product,description:value})
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-[75%] p-[5%] py-[10%] flex">
        <div className='flex flex-col h-full w-full'>
        <h1 className="text-left mb-5 w-[50%] text-3xl font-bold">
        Edit Product
      </h1>
      <form className="flex flex-col w-[75%]">
        <input
          onChange={inputChangeHandler}
          className="border p-3 text-1xl mb-3"
          name="title"
          value={product.title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={inputChangeHandler}
          className="border p-3 text-1xl mb-3"
          type="url"
          name="image"
          value={product && product.image}
          placeholder="Image"
        />
        <div className="flex justify-between">
          <input
            onChange={inputChangeHandler}
            className="border p-3 text-1xl mb-3"
            type="number"
            name="price"
            value={product && product.price}
            placeholder="Price"
          />
          <input
            onChange={inputChangeHandler}
            className="border p-3 text-1xl mb-3"
            type="text"
            name="category"
            value={product && product.category}
            placeholder="Category"
          />
        </div>
        <textarea
          onChange={inputChangeHandler}
          className="border p-3 text-1xl mb-5"
          rows="10"
          name="description"
          value={product && product.description}
          placeholder="Enter Product description here..."
        />
        <button
          onClick={createProductHandler}
          className="w-[30%] text-1xl border border-blue-200 rounded text-blue-400 py-2 px-1"
        >
          Edit Product
        </button>
      </form>
        </div>

      <div className='w-[60%] ml-3 height-[70%] rounded-lg overflow-hidden'>
        <img className='object-cover w-full h-[60%]' src={product && product.image} alt="" />
      </div>
    </div>
  );
}

export default Edit