import React from "react"
import "./Product.css"


export default ( { product, productType } ) => (
    <section className = "product">
        <h3 className = "product__name">{product.name}</h3>
        <div className = "product__price">${product.price}</div>
        <div className = "product__type">{productType.type}</div>
    </section>
)