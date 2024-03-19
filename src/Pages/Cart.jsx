import React, { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmout] = useState(0);

  useEffect(()=>{
    setTotalAmout(cart.reduce((acc,curr)=>acc+curr.price , 0))
  },[cart])

  return (
    <div className="w-full flex xl:flex-row flex-col justify-center items-center" >
      {cart.length > 0 ? (
        <div className="w-full flex xl:flex-row flex-col 2xl:w-10/12 items-center  mt-5 ">
          <div className="xl:w-3/4 w-full">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
            ))}
          </div>

          <div className="xl:w-1/4 w-full items-center p-2  flex flex-col justify-between ">
            <div className="flex items-center flex-col">
              <div className="font-semibold text-xl text-green-800">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700 ">Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>
            <div className="justify-end">
              <p className="text-md font-semibold">Total Amount : {totalAmount}</p>
              <button  className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-2 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90vh] flex-col gap-y-10 flex justify-center items-center">
          <h1 className="font-bold text-3xl text-green-600">Cart is Empty </h1>
          <NavLink to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
