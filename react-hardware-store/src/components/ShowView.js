import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import styled from 'styled-components'

const ShowViewContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 35px;`

const Products = styled.div`
border: solid black 1px;
width: 800px;
margin-left: 15px;`

const Cart = styled.div`
border: solid black 1px;
width: 500px;`


class ShowView extends Component {
    render() {
        return (
            <ShowViewContainer >
                <Products >
                    <h1>Shop</h1>
                    <h2>Products</h2>
                    <ProductList productList={this.props.productList}
                        deleteProduct={this.props.deleteProduct} isAdmin={false} />
                </Products>
                <Cart >
                    <ShoppingCart productList={this.props.productList}
                        addProductToCart={this.props.addProductToCart}
                        removeCartProduct={this.props.removeCartProduct} />
                </Cart>
            </ShowViewContainer>
        )
    }
}

export default ShowView