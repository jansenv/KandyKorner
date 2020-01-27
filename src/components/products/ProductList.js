import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <div className="products">
            {
                products.map(product => {
                    const type = productTypes.find(pt => pt.id === product.productTypeId)

                    return <Product key={product.id}
                        product={product}
                        productType={type} />
                })
            }
        </div>
    )
}