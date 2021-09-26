import React from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/Products.module.css"
import accessoriesButton from "../../images/accessoriesButon.jpg"
import clothesButton from "../../images/clothesButton.jpg"
import electronicButton from "../../images/electronicsButton.jpeg"

const Products = () => {
    return (
        <>
            <div>
                <Link className = {styles.productsLink} to = "/accessories" > <img src = {accessoriesButton} alt = "accessories" /> </Link>
                <Link className = {styles.productsLink} to = "/clothes" ><img src = {clothesButton} alt = "products" /></Link>
                <Link className = {styles.electronicsLink} to = "/electronics" ><img src = {electronicButton} alt = "electronics" /></Link>
            </div>
        </>
    )
}

export { Products }
