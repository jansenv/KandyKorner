import React from "react"
import "./KandyKorner.css"
import { LocationProvider } from "./locations/LocationsProvider"
import LocationsList from "./locations/LocationsList"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"

export default () => (
    <>
        <h1>Kandy Korner</h1>

        <h2>Locations</h2>
        <article className = "locations">
            <LocationProvider>
                <LocationsList />
            </LocationProvider>
        </article>

        <h2>Products</h2>
        <article className = "products">
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </article>
    </>
)