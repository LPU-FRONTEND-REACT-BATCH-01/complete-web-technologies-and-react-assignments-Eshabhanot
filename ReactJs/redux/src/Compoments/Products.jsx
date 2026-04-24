import { useDispatch, useSelector } from "react-redux"
import { addToCart,removeToCart } from "../RTX/CartItem";

const Products=()=>{
    const cartItem =useSelector(state=>state.cart.products);
    const dispatch=useDispatch()

    let product1={
        id:1,
        name:'laptop',
        price:300000
    }
    let product2={
        id:1,
        name:'computer',
        price:300000
    }
    console.log(cartItem);
    return(
    <div>
            <button onClick={()=>dispatch(addToCart(product1))}>Add to cart</button>
            <button onClick={()=>dispatch(addToCart(product2))}>Add to cart</button>
            
           <button onClick={()=>dispatch(removeToCart(product1.id))}>Remove</button>
    </div>

    )
}
export default Products