import React from 'react'
import styles from "../Components/styles/Contribute.module.css"
import { Carouel } from './Carouel'
import {HomeCardsCarousel} from "./HomeCardsCarousel"

const Home = () => {
    return (
        <div className = {styles.home}>
            <Carouel/>
            <div></div>
            <HomeCardsCarousel/>
        </div>
    )
}

export { Home }
