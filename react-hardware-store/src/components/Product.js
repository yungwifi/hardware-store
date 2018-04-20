import React, { Component } from 'react'
import styled from 'styled-components'

const SpecificProduct = styled.div`
border-top: solid black 1px;
margin: 10px;
padding: 10px;`

class Product extends Component {
    deleteProduct = (productName) => {
        this.props.deleteProduct(productName)
    }

    render() {
        const productName = this.props.productName
        return (
            <div>
                <SpecificProduct >
                    Name: {this.props.productName}
                    <br />
                    Description: {this.props.description}
                    <br />
                    price: ${this.props.price.toFixed(2)}
                    {this.props.isAdmin
                        ? <div><button onClick={() => this.deleteProduct(productName)}>Delete {productName} </button></div>
                        : null}
                    <br />
                    <button onClick={() => this.addProductToCart(productName)}> Add To Cart </button>
                </SpecificProduct>
            </div>
        )
    }
}
export default Product