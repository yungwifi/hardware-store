import React, { Component } from 'react'

class ProductForm extends Component {
    state = {
        newProduct: {}
    }

    handleNewProductChange = (event) => {
        const attributeName = event.target.name
        const attributValue = event.target.value

        const newProduct = { ...this.state.newProduct }
        newProduct[attributeName] = attributValue

        this.setState({ newProduct })
    }

    addNewProduct = (event) => {
        event.preventDefault()
        this.props.addNewProductToProductList(this.state.newProduct)
    }


    render() {
        return (
            <div>
                <form>
                    <div><input name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                    <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><input type="submit" value="Create New Product" onClick={this.addNewProduct} /></div>
                </form>
            </div>
        )
    }
}

export default ProductForm