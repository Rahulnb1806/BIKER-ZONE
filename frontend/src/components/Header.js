import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMotorcycle, faShoppingCart,faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="logo-circle me-3">
            <img src="/images/logo.png" alt="BikerZone Logo" />
          </div>
          <div className="brand-text">
            <div className="brand-name">BIKERZONE</div>
            <div className="brand-slogan small">Texture every ride</div>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <FontAwesomeIcon icon={faMotorcycle} className="me-1" /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart
                <span className="cart-badge cart-pulse">{cartCount || 0}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comment">
                <FontAwesomeIcon icon={faCommentDots} className="me-1" /> Comment
            </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/Update">
                <FontAwesomeIcon icon={faCommentDots} className="me-1" /> update
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;