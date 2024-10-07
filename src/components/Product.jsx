import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import {add_to_cart} from '../redux/cartSlice'

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClick = (item) => {
    
    navigate("/ProductDetails", { state:item, });
  };
  const handleAddtoCart=(e,item)=>{
    e.stopPropagation()
    dispatch(add_to_cart(item))
    

    
  }
  return (
    <div
      
      className="w-screen  flex flex-row flex-wrap justify-center   rounded-xl "
    >
      {item.map((item, index) => (
        <div onClick={()=>handleClick(item)} key={index}>
          <div  className="bg-orange-100 rounded-lg w-72 m-2 py-10 ">
            <div className="flex justify-center items-center rounded-md  pt-5">
              <img src={item.image} className=" h-52 " />
            </div>
            <div className=" p-2 flex flex-col items-center">
              <div className="text-lg font-bold">{item.title}</div>
              <div className="text-sm font-semibold">
                {item.description.substring(0, 150) + "..."}
              </div>
              <div className="bg-orange-400 w-full  h-12 ">
                <div className="text-lg text-center font-medium text-white">
                  ${item.price}
                </div>
              </div>
              <div >
                <button onClick={(e)=>handleAddtoCart(e,item)}
                  className="px-4 py-2 m-2 bg-orange-500 text-white rounded hover:bg-green-600"
                  type="Add to cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
