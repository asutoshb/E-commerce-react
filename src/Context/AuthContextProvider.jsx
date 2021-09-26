import axios from 'axios'
import React from 'react'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = React.useState(false)
    const [cartData, setCartData] = React.useState(0)
    const [cartCount, setCartCount] = React.useState(0)

    const getCartData = async () => {
        try {
            const {data} = await axios.get(
                "https://json-server-olx.herokuapp.com/postDataToCart"
            )
            setCartData(data)
            setCartCount(data.length)
        } catch(err) {
            console.log(err)
        }
    }

    const loginSuccess = () => {
        setIsAuth(true)
    }

    const logoutSuccess = () => {
        setIsAuth(false)
    }
    
    const value = {isAuth, loginSuccess, logoutSuccess, cartCount, setCartCount, cartData, setCartData, getCartData}

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

