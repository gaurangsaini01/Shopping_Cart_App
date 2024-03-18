import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
function CartItem({ cartItem }) {
  const { cart } = useSelector((state) => state);
  
  const dispatch = useDispatch();
  
  function removeFromCart() {
    dispatch(remove(cartItem.id));
    toast.error("Item Removed");
  }

  return (
    <div>
      <div>
        <div>
          <img src={cartItem?.image} alt="Product Image" />
        </div>
        <div>
          <h1>{cartItem?.title}</h1>
          <h1>{cartItem?.description}</h1>
          <div>
            <p>{cartItem?.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase></FcDeleteDatabase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
