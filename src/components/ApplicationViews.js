import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { LocationDetail } from "./locations/LocationDetail"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./productTypes/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeDetail } from "./employees/EmployeeDetail"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            
            <EmployeeProvider>
                <ProductTypeProvider>
                    <ProductProvider>
                        <LocationProvider>
                            <Route exact path="/locations">
                                <LocationList />
                            </Route>
                            <Route path ="/locations/detail/:locationId(\d+)">
                                <LocationDetail />
                            </Route>

                            <Route exact path="/products">
                                <ProductList />
                            </Route>

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route path="/employees/detail/:employeeId(\d+)">
                                <EmployeeDetail />
                            </Route>
                        </LocationProvider>
                    </ProductProvider>
                </ProductTypeProvider>
            </EmployeeProvider>
        </>
        )
}