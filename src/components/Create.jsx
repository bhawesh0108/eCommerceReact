import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import {nanoid} from 'nanoid';


const Create = () => {
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate()

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState(0);
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const createProductHandler = (e) => {
    e.preventDefault();

    if (
      title.length < 5 ||
      image.length < 5 ||
      price.length < 1 ||
      category.length < 5 ||
      description.length < 5
    ) {
      alert("Please fill all the fields");
    } else {
      const product = {
        id: nanoid(),
        title,
        image,
        price,
        category,
        description,
      };
    
      setProducts([...products,product])
      localStorage.setItem("products",JSON.stringify([...products,product]));
      navigate("/")
   
    }
      
}

    const inputChangeHandler = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "title":
          settitle(value);
          break;
        case "image":
          setimage(value);
          break;
        case "price":
          setprice(value);
          break;
        case "category":
          setcategory(value);
          break;
        case "description":
          setdescription(value);
          break;
        default:
          break;
      }
    };

    return (
      <div className="h-screen w-[85%] p-[15%] py-[10%]">
        <h1 className="text-left mb-5 w-[50%] text-3xl font-bold">
          Create New Product
        </h1>
        <form className="flex flex-col w-[75%]">
          <input
            onChange={inputChangeHandler}
            className="border p-3 text-1xl mb-3"
            name="title"
            value={title}
            type="text"
            placeholder="title"
          />
          <input
            onChange={inputChangeHandler}
            className="border p-3 text-1xl mb-3"
            type="url"
            name="image"
            value={image}
            placeholder="Image"
          />
          <div className="flex justify-between">
            <input
              onChange={inputChangeHandler}
              className="border p-3 text-1xl mb-3"
              type="number"
              name="price"
              value={price}
              placeholder="Price"
            />
            <input
              onChange={inputChangeHandler}
              className="border p-3 text-1xl mb-3"
              type="text"
              name="category"
              value={category}
              placeholder="Category"
            />
          </div>
          <input
            onChange={inputChangeHandler}
            className="border p-3 text-1xl mb-5"
            type="textarea"
            name="description"
            value={description}
            placeholder="Description"
          />
          <button
            onClick={createProductHandler}
            className="w-[30%] text-1xl border border-blue-200 rounded text-blue-400 py-2 px-1"
          >
            Create New Product
          </button>
        </form>
      </div>
    );
  };

export default Create;
