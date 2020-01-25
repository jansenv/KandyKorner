import React from "react"
import "./Location.css"

export default ( { location } ) => (
    <section className = "location">
        <h3 className = "location__address">{location.address}</h3>
        <div className = "location__sqFt">Square footage: {location.squareFootage}</div>
        <div className = "location__handicap">Handicap accessible: {location.handicapAccessible ? "yes" : "no"}</div>
    </section>
)