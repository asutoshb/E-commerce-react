import axios from 'axios'
import React from 'react'
import { LoadingIndicator } from '../LoadingIndicator'
import { AccessoriesCard } from './AccessoriesCard'
import accessories from "../../images/accessories.png"
import styles from "../styles/Clothes.module.css"
import { BackToProduct } from '../../Routes/BackToProduct'

const Accessories = () => {

    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)

    React.useEffect(() => {
        getProductData()
    }, [])

    const getProductData = () => {
        setIsLoading(true)
        axios.get("https://json-server-olx.herokuapp.com/accessories")
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

    return isLoading ? (
        <LoadingIndicator/>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (
        <div>
            <div className = {styles.banner}>
                <img src={accessories} alt="accessories" />
            </div>
            <div>
                <BackToProduct/>
            </div>
            <div>
                {data.map((item) => (
                    <AccessoriesCard {...item} key = {item.id} />
                ))}
            </div>
        </div>
    )
}

export { Accessories }
