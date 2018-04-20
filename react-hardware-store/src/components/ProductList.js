import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {

    render() {
        const productsComponents = this.props.productList.map((product, i) => {
            return <Product
                key={i}
                productName={product.productName}
                description={product.description}
                price={product.price}
                addProductToCart={this.props.addProductToCart}
                isAdmin={this.props.isAdmin}
                deleteProduct={this.props.deleteProduct} />
        })
        return (
            <div>
                {productsComponents}
            </div>

        )
    }
}

export default ProductList