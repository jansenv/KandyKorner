import React from "react"
import { LocationProvider } from "./locations/LocationsProvider"
import { Route } from "react-router-dom"
import LocationsList from "./locations/LocationsList"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"

export default (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationsList />
                </Route>
            </LocationProvider>

            <ProductTypeProvider>
                <ProductProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductProvider>
            </ProductTypeProvider>
        </>
    )
}