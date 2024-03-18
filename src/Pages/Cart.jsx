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
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
            ))}
          </div>

          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount : {totalAmount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is Empty </h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
