import React, { useContext } from "react"
import { LocationContext } from "./LocationsProvider"
import Location from "./Location"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className = "locations">
            {
                locations.map(loc => <Location key={loc.id} location={loc} />)
            }
        </div>
    )
}