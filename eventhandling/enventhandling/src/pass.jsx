import React from 'react';

class ProductList extends React.Component {
  handleAddToCart(productName) {
    console.log(productName);
  }
  
  render() {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" }
    ];
    
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            {product.name}{" "}
            <button onClick={() => this.handleAddToCart(product.name)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;