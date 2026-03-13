import { Link } from 'react-router-dom';

const ProductCart = ({ product, onAddToCart }) => {
  return (
    <div className="card product-card h-100">
      <div className="product-badge">
        {product.rating && (
          <span className="rating-badge">
            ⭐ {product.rating.toFixed(1)}
          </span>
        )}
      </div>
      <div className="product-image-container">
        <img 
          src={`/images/${product.image}`} 
          className="card-img-top product-image" 
          alt={product.name}
          onError={(e) => {
            e.target.src = '/images/logo.png';
            e.target.style.objectFit = 'contain';
          }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="price-text">₹{product.price.toLocaleString('en-IN')}</p>
        
        {product.features && (
          <ul className="product-features">
            {product.features.slice(0, 2).map((feature, i) => (
              <li key={i} className="small">{feature}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-footer bg-transparent">
        <button 
          className="btn btn-primary w-100"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <Link 
          to={`/products/${product.id}`} 
          className="btn btn-outline-secondary w-100 mt-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;