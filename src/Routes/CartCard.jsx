import React, { useState } from "react"
import Axios from "axios"
import styles from "../Components/styles/CartCard.module.css"
import { useHistory } from "react-router-dom"


const CartCard = ( {product_name, img, price,id, rating} ) => {

    const [productCount, setProductCount] = useState(1)
    const history = useHistory()
    const axios = Axios.create({
        baseURL: "https://json-server-olx.herokuapp.com/"
    })

    const removeProduct = (id, product_name, price, img, rating) => {
        const config = {
            url: `postDataToCart/${id}`,
            method: "delete",
            data: {
                product_name,
                price,
                img,
                rating
            }
        }
        return axios(config)
    }

    const buyProduct = () => {
        alert(`Thank you for placing your order`)
        setTimeout( function() {
            history.push('/')
        }, 2000)
    }

    return  (
        <div className = {styles.cartCard}>
            <img src= {img} alt="ItemImage" className = {styles.cartImage} />
            <div className = {styles.productCartCard} >
                <div>
                    <h3>{product_name}</h3>
                    <h4>{rating}</h4>                  
                </div>
                <div className = {styles.itemQuantity}>
                    <button className = {styles.itemCount} onClick ={() => setProductCount(productCount - 1)} >-</button>
                    <div>{productCount}</div>
                    <button className = {styles.itemCount} onClick ={() => setProductCount(productCount + 1)}>+</button>
                </div>
                <div className = {styles.itemPrice}>
                    <h3> ₹ { productCount * price }</h3>
                    <h2>veri<span>fied</span></h2>
                </div>
               
                <div style = {{display: "flex", gap: "10px", width: "80%"}} >
                    <button className = {styles.buyItem} onClick = {() => buyProduct(id)}> BUY NOW</button>
                    <button className = {styles.removeItem} onClick = {() => removeProduct(id)} >REMOVE</button>
                </div>
                <br/>
            </div>   
        </div>
    )
}

export {CartCard}
