import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { LocationDetail } from "./locations/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
    
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route path ="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>
        </>
        )
}