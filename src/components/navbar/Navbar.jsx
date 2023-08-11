import React from 'react';
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import n from "./navbar.module.scss"

const Navbar = () => {
    return (
        <div className={n.navbar}>
            <div className={n.links}>
                <Link to={"/"}>Shop</Link>
                <Link to={"/cart"}>
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;