import React, { useState, useContext, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(setProducts)
    }

    const getProductById = id => {
        return fetch(`http://localhost:8088/products/${productId}`)
        .then(res => res.json())

    }

    const updateProduct = product => {
            return fetch(`http://localhost:8088/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
        }

        const deleteProduct = () => {
            return fetch (`http://localhost:8088/products/${productId}`, {
            method: "DELETE"
        })
        .then(getProducts)
        }


        return (
            <ProductContext.Provider value={{
                products, getProducts, addProduct, getProductById, deleteProduct
            }}>
                {props.children}
            </ProductContext.Provider>
        )

}