import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from '../redux/slices/CartSlice'
function Product({post}) {
    console.log(post)
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function addHandler(){
        dispatch(add(post));
        toast.success('Product Added To Cart');
    }
    function removeHandler(){
        dispatch(remove(post.id));
        toast.error('Product Removed From Cart');
    }
  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
            <img src={post.image} alt="" />
        </div>
        <div>
            <p>${post.price}</p>
        </div>
        <div>
            {
                cart.some(cartItem=>cartItem.id === post.id) ? 
                <button onClick={removeHandler}>Remove Item</button>:
                <button onClick={addHandler}>Add to Cart</button>
            }
        </div>
    </div>
  )
}

export default Product