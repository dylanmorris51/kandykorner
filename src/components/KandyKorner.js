import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Link } from "react-router-dom"
import { Route, Redirect } from "react-router-dom"
import "./KandyKorner.css"
import "./locations/Location.css"
import { locationCard } from "./locations/LocationCard"



export const KandyKorner = () => {
    return (
        <>
            <NavBar />
            <ApplicationViews />
        </>

    )
}