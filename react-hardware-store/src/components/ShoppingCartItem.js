import React, { Component } from 'react'
import Product from './Product'
import styled from 'styled-components'
import productList from './ProductList'
import ShoppingCartItem from './ShoppingCartItem'



class CartProduct extends Component {
    removeCartProduct = (productName) => {
        this.props.removeCartProduct(productName)
    }

    render() {
        const productName = this.props.productName
        return (
            <div>
                Name: {this.props.productName}
                <br />
                Description: {this.props.description}
                <br />
                price: ${this.props.price.toFixed(2)}
                <br />
                <button onClick={() => this.removeCartProduct(productName)}> Remove {productName} </button>
            </div>
        )
    }
}
export default CartProduct