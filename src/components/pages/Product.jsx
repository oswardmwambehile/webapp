import React from 'react';
import '../../App.css';
import '../Product.css'; // Adjust if needed

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    image: '/images/img-1.jpg',
    description: 'High-quality sound with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$199.99',
    image: '/images/img-2.jpg',
    description: 'Track your fitness and stay connected.',
  },
  {
    id: 3,
    name: 'Drone Camera',
    price: '$299.99',
    image: '/images/img-3.jpg',
    description: 'Capture incredible aerial views.',
  },
  {
    id: 4,
    name: 'Portable Speaker',
    price: '$49.99',
    image: '/images/img-3.jpg',
    description: 'Great sound, wherever you go.',
  },
];

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-hero">
        <h1 className="products-title">PRODUCTS</h1>
      </div>
      <div className="products-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
