import React, { useContext } from 'react';
import {PRODUCTS} from "../../products";
import sh from "./shop.module.scss";
import {ShopContext} from "../../context/ShopContext";


const Shop = () => {
    const {addToCart, cartItems} = useContext(ShopContext)
    return (
        <div className={sh.shop}>
            <div className={sh.shopTitle}>
                <h1>PedroTech Shop</h1>
            </div>
            <div className={sh.products}>
                {PRODUCTS.map((product) => {
                    const cartItemAmount = cartItems[product.id]
                    return(
                        <div className={sh.product}>
                            <img src={product.productImage} alt="productImage" />
                            <div className={sh.description}>
                                <p><b>{product.productName}</b></p>
                                <p>${product.price}</p>
                            </div>
                            <button className={sh.addToCartBtn} onClick={() => addToCart(product.id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Shop;