import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { useHistory } from "react-router-dom"
import "./Product.css"

export const ProductList = () => {
    
    const { products, getProducts } = useContext(ProductContext)

    const [product, setProducts] = useState([])

    const history = useHistory()

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h2>Products</h2>
            <div>
                {
                    products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </>
    )

}