import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { compileString } from "sass";




function Home(){


    
const Productlist=
[{
    name:"Mac book",
    price:40000,
    imgsrc:"https://www.shutterstock.com/image-photo/burgas-bulgaria-august-31-2017-260nw-715105864.jpg",
     id:234
},

{
    name:"Black shoes",
    price:500,
    imgsrc:"https://m.media-amazon.com/images/I/71svxXHx3yL._UY575_.jpg",
    id:678
}
]

const dispatch=useDispatch();

const AddtoCart=(options)=>{
    dispatch({type:"addToCart" ,payload:options});
    dispatch({type:"calculatePrice"});
toast.success("Added To cart");


}
    return(<div className="home">

{
    Productlist.map(i=>
       <ProductCart key={i.id} 
       id={i.id}
       name={i.name} price={i.price} 
       imgsrc={i.imgsrc}
       handler={AddtoCart}>

        </ProductCart>)
}
        
    </div>)
}

const ProductCart=({name,id,handler,imgsrc,price})=>(
    <div className="productcart">
        <img src={imgsrc} alt={name}></img>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,id, price,imgsrc,quantity:1})}>Add To Cart</button>

    </div>

)


export default Home;