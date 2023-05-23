import { type } from "@testing-library/user-event/dist/type";
import React from "react";

import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";

function Cart(){

    const {cartItems,subTotal,tax,shipping,Total}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();


    const increment=(id)=>{
   dispatch({
    type:"addToCart",
    payload:{id},
   }
   );
   dispatch({type:"calculatePrice"});
    }
    const decrement=(id)=>{
        dispatch({
            type:"decrement",
            payload:id,
           }
           );
           dispatch({type:"calculatePrice"});
    }
    
    const deletehandler=(id)=>{
        dispatch({
            type:"deleteFromCart",
            payload:id,
           }
           );
           dispatch({type:"calculatePrice"});

    }
    

    return(<div className="cart">
<main>
   {
    cartItems.length>0?(
        cartItems.map((i)=>(

    <CartItem 
    imgsrc={i.imgsrc}
    name={i.name}
    price={i.price}
    qty={i.quantity}
    id={i.id}
    key={i.id}
    increment={increment}
    decrement={decrement}
    deletehandler={deletehandler}
    ></CartItem>
        ))
    ):
    <h1>No Items Yet</h1>
   
   }
    
</main>
   <aside>
    <h2>subTotal:${subTotal}</h2>
    <h2>shipping:${shipping} </h2>
    <h2>tax:${tax}</h2>
    <h2>Total:${Total}</h2>
   </aside>

    </div>);
}


const CartItem=({name,imgsrc,price,id,increment,decrement,deletehandler,qty})=>(

    <div className="cartItem">
        <img src={imgsrc}></img>

        <article>
            <p>{name}</p>
            <p>${price}</p>
        </article>
<div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deletehandler(id)}></AiFillDelete>
    </div>
)




export default Cart;
