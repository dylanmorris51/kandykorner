import React, { useState, createContext, useContext } from "react"

export const ProductTypeContext = createContext()


export const ProductTypeProvider = (props) => {

    const [productTypes, setProductTypes] = useState()

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }

    return (
        <ProductTypeContext.Provider value={{
            productTypes, getProductTypes
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}