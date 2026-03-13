import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>BIKERZONE</h5>
            <p>Texture every ride with the right gear</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/products" className="text-white">Products</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>contact@bikerzone.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}