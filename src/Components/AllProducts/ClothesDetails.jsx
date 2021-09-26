import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useHistory, useParams} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContextProvider'
import { LoadingIndicator } from '../LoadingIndicator'
import styles from "../styles/ClothesDetails.module.css"
import {BsTag, BsStarFill} from "react-icons/bs"

const ClothesDetails = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const {isAuth, getCartData, setCartCount} = React.useContext(AuthContext)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        getProductDetails(id)
    }, [])

    const getProductDetails = (id) => {
        setIsLoading(true)
        axios.get(`https://json-server-olx.herokuapp.com/clothes/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const {img, product_name, product_desc, price, rating} = data

    const handleClick = (isAuth, postToCart) => {
        if(isAuth) {
            getCartData()
            setCartCount()
            postToCart(data)
            return history.push(`/shoppingcart`)
        }
        else {
            return history.push("signin")
        }
    }

    const postToCart = async(data) => {
        const {img, product_name, price,rating} = data
        const payload = {
            id,
            product_name,
            price,
            img,
            rating
        }

        try {
            const res = await axios.post(
                "https://json-server-olx.herokuapp.com/postDataToCart",
                payload
            )
        } catch (err) {
            console.log(err)
        }
    }

    return isLoading ? (
        <LoadingIndicator/>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (   
        <div className = {styles.clothesDetailsCard} >
            <div className = {styles.details}>
                <img src= {img} alt="Image"/>
                <div>
                    <p>Product : {product_name}</p>
                    <p>{product_desc}</p>
                    <h4>{rating} <BsStarFill/></h4>
                    <h1>₹ {price}</h1>
                    <h4>Hurry, Only few left!</h4>
                    <h2>Available offers</h2>
                    <h5><BsTag color = "green" /> Buy More, Save More <span>₹1499 save 15%</span> See all product</h5>
                    <h5><BsTag color = "green" />  <span>Offer 5% </span> Unlimited Cashback on Flipkart Axis Bank Credit Car</h5>
                    <h5><BsTag color = "green" />  <span>Offer ₹20</span> Off on first prepaid transaction using UPI payments, minimum order value ₹750/</h5>
                    <h5><BsTag color = "green" />  <span>Offer ₹20 Off</span> on first prepaid transaction using RuPay debit card, minimum order value ₹750/</h5>
                </div>
            </div>
            <div>
                <button className = {styles.addToCart} onClick = {() => handleClick(isAuth, postToCart)} >Add to cart</button>
                <Link className = {styles.goBack} to = "/clothes" >Go Back</Link> 
            </div>
                
        </div> 
    )
}

export { ClothesDetails }
