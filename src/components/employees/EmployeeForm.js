import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
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

    useEffect(() => {
        getLocations().then(()=>{
            if (employeeId) {
                getEmployeeById(employeeId)
                    .then(employee => {
                        setEmplopyee(employee)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    //TODO: Add the rest of the input fields to the form after connecting to AppViews and checking on DOM
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Employee name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="position">Employee Position:</label>
                    <input type="text" id="position" required autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Employee position" value={employee.position} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Management?:</label>
                    <input type="text" id="manager" required autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Yes or No" value={employee.manager} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="status">Employee status:</label>
                    <input type="text" id="status" required autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Employee status" value={employee.status} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Employee rate:</label>
                    <input type="text" id="rate" required autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Enter hourly rate" value={employee.rate} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveEmployee()
                }}>
                {employeeId ? "Save Employee" : "Add Employee"}
            </button>
        </form>
    )

}