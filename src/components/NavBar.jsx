import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const cartItems = useSelector((state)=>state.cart) 
  const navigate =useNavigate()
  const gotocart=()=>{
    navigate('/cart')
  }
  return (
    <div>
        <ul className='flex justify-end  bg-orange-500 w-screen h-10 text-xl text-white items-center px-10 font-bold'>
            <li className='absolute left-10 lg:font-extrabold font-light text-xs lg:text-2xl'>e-commerce website</li>
          <li className='px-2' onClick={()=>navigate('/')}>home</li>
          <li className='px-2' onClick={()=>navigate("/login")}>account</li>
          
          <li className='px-2'>  about</li>
         
          <li  onClick={gotocart}>
            <div className='flex
            px-3'>
            <FaCartArrowDown />

          <div className=' text-s font-thin'>{cartItems.length}</div>
            </div>
          </li>
        </ul>
 
</div>


  )
}

export default NavBar