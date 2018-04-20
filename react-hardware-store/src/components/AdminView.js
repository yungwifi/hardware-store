import React, { Component } from 'react'
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component {
    state = {
        editSaleItem: false
    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem
        this.setState({ editSaleItem })
    }

    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <button onClick={this.toggleEditSaleItem}>
                    {this.state.editSaleItem
                        ? "Hide Edit Sale Item"
                        : "Edit Sale Item"}
                </button>

                {this.state.editSaleItem
                    ? <div> Edit Sale Item: <input type="text" value={this.props.itemCurrentlyOnSale} onChange={this.props.handleItemCurrentlyOnSaleChange} /> </div>
                    : null}

                <h2>Products</h2>
                <ProductList productList={this.props.productList}
                    deleteProduct={this.props.deleteProduct}
                    isAdmin={true} />
                <h2>Create a New Product</h2>
                <ProductForm addNewProductToProductList={this.props.addNewProductToProductList} />
            </div>
        )
    }
}

export default AdminView 