import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {Link, NavLink} from "react-router-dom"
import { AuthContext } from '../Context/AuthContextProvider'
import styles from "./styles/Contribute.module.css"

const NavBar = () => {

    const {cartCount} = React.useContext(AuthContext)

    const Count = cartCount !== 0 && cartCount
  
    const {isAuth} = React.useContext(AuthContext)

    return (
        <div className = {styles.navBar}>
            <div><Link to = "/">SHOPIFY</Link></div>
            <div>
                <Link to = "/" >Home</Link>
                <Link to = "/contact" >Contact</Link>
                <Link to = "/about" >About</Link>
                <Link to = "/faq" >FAQ</Link>
                <Link to = "/products" >Products</Link>
                {isAuth ? <Link to = "/signin"> Sign out</Link> : <Link to = "/signin" >Sign In</Link> }
                {isAuth ? <Link to = "/shoppingcart" ><FaShoppingCart/></Link> : <Link to = "/signin"><FaShoppingCart/></Link> }
                <span> {Count} </span>
            </div>
        </div>
    )
}

export { NavBar }
