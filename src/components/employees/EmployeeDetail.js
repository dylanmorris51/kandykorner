import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {

    const { getEmployeeById, releaseEmployee } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})
    
    
    const { employeeId } = useParams()
    
    const history = useHistory()

    const handleRelease = () => {
        releaseEmployee(employee.id)
            .then(() => {
                history.push("/employees")
            })
    }
    
    useEffect(() => {
        getEmployeeById(employeeId)
        .then((response) => {
            setEmployee(response)
        })
    }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__position">Position: {employee.position}</div>
            <div className="employee__location">{employee.location?.name}</div>
            <div className="employee__manager">Management: {employee.manager ? "Yes" : "No"}</div>
            <div className="employee__wage">Hourly: {employee.hourlyRate}</div>
            <div className="employee__status">Status: {employee.status}</div>
            <button onClick={handleRelease}>Terminate Employment</button>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
        </section>
    )
}