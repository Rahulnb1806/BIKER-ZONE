import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    setLoading(false);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, (item.quantity || 1) + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <>
      <Header cartCount={cart.length} />
      
      <div className="container py-5">
        <h2 className="mb-4">Your Cart</h2>
        
        {cart.length === 0 ? (
          <div className="alert alert-info text-center py-4">
            <i className="fas fa-shopping-cart fa-3x mb-3"></i>
            <h4>Your cart is empty</h4>
            <p className="mb-0">Start shopping to add items</p>
            <Link to="/products" className="btn btn-warning mt-3">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="card mb-3 cart-item">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img 
                        src={`/images/${item.image}`}  // Fixed path
                        className="img-fluid rounded-start" 
                        alt={item.name}
                        onError={(e) => {
                          e.target.src = '/images/logo.png'; // Fallback image
                          e.target.style.objectFit = 'contain';
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">₹{item.price.toLocaleString('en-IN')}</p>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fas fa-trash-alt me-1"></i> Remove
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <div className="input-group quantity-selector">
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <input 
                          type="text" 
                          className="form-control text-center" 
                          value={item.quantity || 1}
                          readOnly
                        />
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-end mt-4">
              <h4>Total: ₹{total.toLocaleString('en-IN')}</h4>
              <div className="d-grid gap-2 d-md-block">
                <Link to="/products" className="btn btn-secondary me-2">
                  Continue Shopping
                </Link>
                <button className="btn btn-success" id="checkout-btn">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;