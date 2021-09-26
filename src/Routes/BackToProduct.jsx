import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Components/styles/Contribute.module.css"

export const BackToProduct = () => {
    return (
        <div>
            <Link to = "/products"><button className = {styles.backProducts} >Back to Products</button> </Link>
        </div>
    )
}
