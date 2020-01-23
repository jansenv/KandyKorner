import React from "react"
import { LocationProvider } from "./locations/LocationsProvider"
import LocationsList from "./locations/LocationsList"

export default () => (
    <>
        <h1>Kandy Korner</h1>

        <h2>Locations</h2>
        <article className = "locations">
            <LocationProvider>
                <LocationsList />
            </LocationProvider>
        </article>
    </>
)