import React, {useContext} from 'react';
import { PRODUCTS } from "../../products";
import {ShopContext} from "../../context/ShopContext";
import c from "./cart.module.scss";
import { useNavigate } from 'react-router-dom';




const Cart = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate()
    return (
        <div className={c.cart}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className={c.cartItems}>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return (
                            <div className={c.cartItem}>
                                <img src={product.productImage} alt="product-img" />
                                <div className={c.description}>
                                    <p><b>{product.productName}</b></p>
                                    <p>$ {product.price}</p>
                                    <div className={c.countHandler}>
                                        <button onClick={() => {removeFromCart(product.id)}}>-</button>
                                        <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
                                        <button onClick={() => {addToCart(product.id)}}>+</button>
                                    </div>
                                </div>
                            </div>
                        )

                    }
                } )}
            </div>
            {totalAmount > 0 ?  
            <div className={c.checkout}>
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div> : <h1>Your Cart is empty</h1>}
        </div>
    );
};

export default Cart;