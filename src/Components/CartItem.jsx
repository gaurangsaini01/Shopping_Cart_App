import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
function CartItem({ cartItem }) {
  const { cart } = useSelector((state) => state);
  const newDesc = cartItem.description.substr(0,70)
  
  const dispatch = useDispatch();
  
  function removeFromCart() {
    dispatch(remove(cartItem.id));
    toast.error("Item Removed");
  }

  return (
      <div className="flex flex-col w-full md:flex-row p-3 md:p-3 gap-5 items-center justify-center">
        <div className="w-[600px] h-[200px]">
          <img className="object-contain w-full h-full" src={cartItem?.image} alt="Product Image" />
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-slate-700 font-semibold text-xl mb-4">{cartItem?.title}</h1>
          <h1 className="text-slate-700 font-medium text-base">{newDesc}</h1>
          <div className="flex w-full justify-between px-2 items-center">
            <p className="text-green-600 font-semibold">${cartItem?.price}</p>
            <div className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full py-2 mr-3 w-[30px] flex justify-center" onClick={removeFromCart}>
              <MdDelete></MdDelete>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CartItem;
