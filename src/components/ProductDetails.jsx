import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'

const ProductDetails = () => {
  const location= useLocation()
  
  return (
    <>
    <NavBar/>
    
    <div className='flex justify-center items-center mx-52 '>

    <div className=' bg-orange-500
     flex flex-col justify-center
     items-center 
     w-96
     rounded-3xl
     overflow-auto
     m-5 px-5'>
      <img
      className='w-60'
      src={location.state.images}/>
      <h1 className='font-extrabold text-xl text-center'>{location.state.title}</h1>
      <h5 className='font-bold text-m'>{location.state.description}</h5>
      <h5 className='font-bold text-2xl'>${location.state.price}</h5>
      <button className='bg-lime-300  rounded-md m-5 shadow-lg'>
        <span className='text-2xl font-bold'>add to cart</span>
      </button>

    </div>
      </div>
      </>
  )
}

export default ProductDetails