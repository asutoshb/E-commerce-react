import React from 'react'
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import carousel1 from "../images/carousel1.jpg"
import carousel2 from "../images/carousel2.png"
import carousel3 from "../images/carousel3.png"
import carousel4 from "../images/carousel4.png"
import carousel5 from "../images/carousel5.png"
import carousel6 from "../images/carousel6.png"
import "@brainhubeu/react-carousel/lib/style.css";
import styles from "../Components/styles/Contribute.module.css"

export const Carouel = () => {

    const [value, setValue] = React.useState(0);

    function onChange(value) {
        setValue(value);
    }

    return (
        <div>
            <Carousel
                value={value}
                onChange={onChange}
                arrows
                infinite
                slidesPerPage={4} 
            >
                <img className = {styles.carouselImage} src="https://img.freepik.com/free-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg?size=626&ext=jpg" alt="carousel1" />
                <img className = {styles.carouselImage} src={carousel2} alt="carousel2" />
                <img className = {styles.carouselImage} src={carousel3} alt="carousel1" />
                <img className = {styles.carouselImage} src={carousel4} alt="carousel1" />
                <img className = {styles.carouselImage} src={carousel5} alt="carousel1" />
                <img className = {styles.carouselImage} src={carousel6} alt="carousel1" />
            </Carousel>
            <Dots value={value} onChange={onChange} number={6} />
        </div>
    )
}
