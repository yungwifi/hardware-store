import React, { Component } from 'react'
import AdminView from './AdminView';
import styled from 'styled-components'
import ShowView from './ShowView';
import ProductList from './ProductList';

const HomeStyles = styled.div`
margin-left: 10px;
`

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                }
            ],
            productCart: [

            ]
        }
    }

    toggleAdmin = () => {
        const isAdmin = !this.state.isAdmin
        this.setState({ isAdmin })
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem
        this.setState({ editSaleItem })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value
        this.setState({ itemCurrentlyOnSale })
    }

    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]
        productList.push(newProduct)
        this.setState({ productList })
    }

    addProductToCart = (productItem) => {
        const productCart = this.state.productCart
        productCart.push(productItem)
        this.setState({ productCart })
    }

    deleteProduct = (productName) => {
        const productList = this.state.productList.filter(product => {
            return product.productName != productName
        })
        this.setState({ productList })
    }

    removeCartProduct = (productName) => {
        const productCart = this.state.productCart.filter(product => {
            return product.productName != productName
        })
        this.setState({ productCart })
    }

    render() {
        return (
            <HomeStyles >
                <h1> My Hardware Store </h1>
                <button onClick={this.toggleAdmin}> {this.state.isAdmin ? "Hide" : "Show Admin View "} </button>
                <div>
                    Currently On Sale: {this.state.itemCurrentlyOnSale}

                    {this.state.isAdmin
                        ? <AdminView
                            productList={this.state.productList}
                            addNewProductToProductList={this.addNewProductToProductList}
                            deleteProduct={this.deleteProduct}
                            itemCurrentlyOnSale={this.state.itemCurrentlyOnSale}
                            handleItemCurrentlyOnSaleChange={this.handleItemCurrentlyOnSaleChange} />
                        : <ShowView
                            productList={this.state.productList}
                            addProductToCart={this.state.addProductToCart}
                            productList={this.state.productList}
                            removeCartProduct={this.state.removeCartProduct} />}
                </div>
            </HomeStyles>
        )
    }
}

export default HomePage 