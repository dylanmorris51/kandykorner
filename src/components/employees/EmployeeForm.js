import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Employee.css"
import { EmployeeContext, EmployeeProvider } from "./EmployeeProvider"

export const EmployeeForm = () => {
    const {addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmplopyee] = useState({
        name: "",
        locationId: 0,
        position: "",
        manager: "",
        status: "",
        hourlyRate: ""        
    })

    const [isLoading, setIsLoading] = useState(true)
    const {employeeId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = event => {
        const newEmployee = {...employee}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newEmployee[event.target.id] = selectedVal

        setEmplopyee(newEmployee)
    }

    const handleSaveEmployee = () => {
        if (employee.locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (employeeId) {
                updateEmployee({
                    name: employee.name,
                    locationId: employee.locationId,
                    position: employee.position,
                    manager: employee.manager,
                    status: employee.status,
                    hourlyRate: employee.hourlyRate,
                    id: employee.id
                }).then(() => history.push(`/employees/detail/${employee.id}`))
            } else {
                addEmployee({
                    name: employee.name,
                    locationId: employee.locationId,
                    position: employee.position,
                    manager: employee.manager,
                    status: employee.status,
                    hourlyRate: employee.hourlyRate,
                }).then(() => history.push("./employees"))
            }
        }
    }

}