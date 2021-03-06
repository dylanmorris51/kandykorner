import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {

    const { getLocationById } = useContext(LocationContext)

    const [ location, setLocation ] = useState({})
    const history = useHistory()
    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
            .then(res => {
                setLocation(res)
            })
    }, [])

    return (
        <section className="location__details">
            <h2 className="location__name">{location.name}</h2>
            <div className="location__address">{location.address}</div>
            <h3 className="employees__names">Employees</h3>
            <h3 className="products__names">Menu</h3>
        </section>
    )
}