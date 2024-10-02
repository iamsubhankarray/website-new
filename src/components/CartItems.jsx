import React from "react";

function CartItems({ cartItem }) {
  console.log(cartItem);

  return (
    <>
    {cartItem.map((item,index)=>{
      <div key={index}>
        <p>{item[2]}</p>
        <p>{item.description}</p>
      </div>

    })}
 
   </>
  );
}

export default CartItems;
