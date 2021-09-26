import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ClothesCard } from './ClothesCard'

const Mens = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const {category} = useParams()

    useEffect(() => {
        getMensClothes()
    }, [])

    const getMensClothes = () => {
        setIsLoading(true)
        axios.get(`https://json-server-olx.herokuapp.com/clothes/${category}`)
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
        <div>...loading</div>
    ) : isError ? (
        <div>something went wrong</div>
    ) : (
        <div>
            {data.map((item) => (
                <ClothesCard {...item} key = {item.id} />
            ))}
            
        </div>
    )
}

export { Mens }
