import React, { useState, useEffect } from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/producttypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductType = type => {
        return fetch("http://localhost:8088/producttypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        })
            .then(addProductType)
    }

    useEffect(() => {
        getProductTypes()
    }, [])

    useEffect(() => {
        console.log("**** PRODUCT TYPE APPLICATION STATE CHANGED ****")
        console.log(productTypes)
    }, [productTypes])

    return (
        <ProductTypeContext.Provider value = {{
            productTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}