import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Clothes.module.css"
import {BsStarFill} from "react-icons/bs"

const ElectronicsCard = ( {product_name, img, price,id, rating, category} ) => {
    return (
        <Link to = {`/electronics/${id}`}>
            <div className = {styles.clothesCard} >
            <img src= {img} alt={Image}/>
                <h5>{rating} <BsStarFill/></h5>
                <h3>{product_name}</h3>
                <h3>Price: ₹ {price}</h3>
                <h3>Category: {category}</h3>
            </div>
        </Link>
    )
}

export {ElectronicsCard}
