import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { useHistory } from "react-router-dom"
import "./Location.css"

export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Locations:</h2>
                <div className="locations__list">
                    {
                        locations.map(location => {
                            return <LocationCard key={location.id} location={location} />
                        })
                    }
                </div>
        </>
    )

}