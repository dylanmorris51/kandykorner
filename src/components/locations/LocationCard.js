import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({location}) => (
        <section className="location">
            <h3 className="location__name">
                <Link to={`/locations/detail/${location.id}`}>
                    {location.name}
                </Link>
            </h3>
            <address className="location__address">{location.address}</address>
            <small className="location__accessible">{location.accessible ? "Handicap Accessbile!" : "Non-Handicap Accessible"} </small>
        </section>

)