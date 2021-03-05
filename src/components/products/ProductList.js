import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { useHistory } from "react-router-dom"
import "./Product.css"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"

export const ProductList = () => {
    
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes} = useContext(ProductTypeContext)

    const [product, setProducts] = useState([])

    const history = useHistory()

    useEffect(() => {
        getProductTypes().then(getProducts)
    }, [])

    return (
        <>
            <h2>Products</h2>
            <div>
                {
                    products.map(product => {
                        const productType = productTypes.find(type => type.id === product.productTypeId)
                        return <ProductCard key={product.id} product={product} productType={productType} />
                    })
                }
            </div>
        </>
    )

}