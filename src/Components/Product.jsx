import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
function Product({ post }) {
  const newTitle = post.title.substr(0,17);
  const newDesc = post.description.substr(0, 70);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addHandler() {
    dispatch(add(post));
    toast.success("Product Added To Cart");
  }
  function removeHandler() {
    dispatch(remove(post.id));
    toast.error("Product Removed From Cart");
  }
  return (
    <div className="hover:scale-110 transition duration-300 ease-in  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  border-2 flex flex-col items-center justify-between rounded-xl  w-[270px] h-[380px]">
      <div className="flex items-center px-2">
        <p className="text-gray-700 text-lg font-semibold">{newTitle}...</p>
      </div>
      <div className="px-2">
        <p className="text-[11px] text-gray-400">{newDesc}...</p>
      </div>
      <div className="h-[160px] overflow-hidden  items-center justify-center flex">
        <img className="w-full h-full object-contain" src={post.image}  alt="" />
      </div>
      <div className="flex gap-12 items-center">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <div className="hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px]  tracking-wide">
          {cart.some((cartItem) => cartItem.id === post.id) ? (
            <button onClick={removeHandler}>Remove Item</button>
          ) : (
            <button onClick={addHandler}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
