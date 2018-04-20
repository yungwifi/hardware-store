import React, { Component } from 'react'
import Product from './Product'
import styled from 'styled-components'
import productList from './ProductList'
import ShoppingCartItem from './ShoppingCartItem'

class ShoppingCart extends Component {
    render() {
        const cartComponents = this.props.productList.map((product, i) => {
            return <ShoppingCartItem
                key={i}
                productName={product.productName}
                description={product.description}
                price={product.price}
                addProductToCart={this.props.addProductToCart}
                removeCartProduct={this.props.removeCartProduct} />
        })
        return (
            <div>
                <h1> Shopping Cart </h1>
                <h5> Total: </h5>
                <br />
                {cartComponents}
            </div>

        )
    }
}

export default ShoppingCart