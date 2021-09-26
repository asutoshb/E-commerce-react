import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Contact } from './Contact'
import {Home} from "./Home"
import {Faq} from "./Faq"
import {About} from "./About"
import {Cart} from "./Cart"
import {Products} from "../Components/AllProducts/Products"
import { Clothes } from '../Components/AllProducts/Clothes'
import { Accessories } from '../Components/AllProducts/Accessories'
import { Electronics } from '../Components/AllProducts/Electronics'
import {ClothesDetails} from "../Components/AllProducts/ClothesDetails"
import { Signin } from './Signin'
import { PrivateRoute } from './PrivateRoute'
import { AccessoriesDetails } from '../Components/AllProducts/AccessoriesDetails'
import { ElectronicsDetails } from '../Components/AllProducts/ElectronicsDetails'

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route exact path = "/contact" >
                    <Contact/>
                </Route>
                <Route exact path = "/faq" >
                    <Faq/>
                </Route>
                <Route exact path = "/about" >
                    <About/>
                </Route>
                <Route exact path = "/products" >
                    <Products/>
                </Route>
                <Route exact path = "/signin" >
                    <Signin/>
                </Route>
                <Route exact path = "/clothes" >
                    <Clothes/>
                </Route>
                <PrivateRoute path = "/clothes/:id" >
                    <ClothesDetails/>
                </PrivateRoute>
                <Route exact path = "/accessories" >
                    <Accessories/>
                </Route>
                <PrivateRoute path = "/accessories/:id" >
                    <AccessoriesDetails/>
                </PrivateRoute>
                <Route exact path = "/electronics" >
                    <Electronics/>
                </Route>
                <PrivateRoute path = "/electronics/:id" >
                    <ElectronicsDetails/>
                </PrivateRoute>
                <Route exact path = "/shoppingcart" >
                   <Cart/>
                </Route>
                <Route >
                    <img style = {{marginLeft: "46%"}} src="https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png" alt="error" />
                </Route>
            </Switch>
        </div>
    )
}

export { AllRoutes }


// Inline style is given only for error image