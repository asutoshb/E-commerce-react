import React from "react"
import { AuthContext } from "../Context/AuthContextProvider"
import {CartCard} from "./CartCard"

const Cart = () => {

    const {cartData, setCartData, getCartData} = React.useContext(AuthContext)

    React.useEffect(() => {
        getCartData()
        setCartData(cartData)
    }, [cartData])

    return cartData === 0 ? (
        <div style = {{width: "80%",  margin: "50px auto"}}>
            <h1>Cart Empty</h1>
        </div>
    ) : (
        <div style = {{display: "flex", flexDirection: "column", gap: "20px" }}>
            {cartData.map((item) => (
                <CartCard key = {item.id} {...item} />
            ))}
        </div>
    )
}

export {Cart}
