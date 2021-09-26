import React from 'react'
import styles from "../Components/styles/Contribute.module.css"
import {  FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
        <div className = {styles.contact}>
            <h3>Email: shop@easyshop.cart</h3>
            <h3>Website: www.easyshopcart.com</h3>
            <h3>Helpline no. : +91 1342178202, +91 1342178203</h3>   
        </div>
        <div className = {styles.contactIcons}>
            <div>
                <div style = {{marginLeft: "47px"}}><FaFacebook size = "30px" color = "blue"/></div> 
                <div>easyshopcartofficial</div>  
            </div>
            <div> 
                <div style = {{marginLeft: "47px"}}><FaInstagram size = "30px" color = "RGB(131, 58, 180)"/></div>  
                <div>easyshopcart15521</div>
            </div>
            <div> 
                <div style = {{marginLeft: "47px"}}><FaYoutube size = "30px" color = "red"/> </div>
                <div>easyshopcartvideos</div>
            </div>
            <div>
                <div style = {{marginLeft: "47px"}}><FaTwitter size = "30px" color = "#1DA1F2"/></div> 
                <div>@easyshopcartofficial</div> 
            </div>
        </div>
        </>
    )
}

export  {Contact}
