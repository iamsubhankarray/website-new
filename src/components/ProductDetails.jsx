import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../redux/cartSlice'

const ProductDetails = () => {
  const dispatch = useDispatch()
  const location= useLocation()
  
  return (
    <>
    <NavBar/>
    
    <div className='grid grid-cols-3'>

    <div className='grid col-span-1'>
      <img
      className='p-5'
      
      src={location.state.image}/>
    </div>
    <div className='col-span-2 '>

      <h1 className='font-extrabold text-xl text-center'>{location.state.title}</h1>
      <h5 className='font-medium text-s p-5'>{location.state.description}</h5>
      <h5 className='font-bold text-2xl'>${location.state.price}</h5>
    

          <button className='bg-lime-300  rounded-md  shadow-lg w-40'onClick={()=>dispatch(add_to_cart(location.state))}>
        <span className=' font-bold'>add to cart</span>
      </button>
    </div>
    
    

      </div>
      </>
  )
}

export default ProductDetails