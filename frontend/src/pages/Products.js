import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCart';

const Products = () => {
  const [cart, setCart] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  // Categories data - matching your image
  const categories = [
    { name: 'All', value: null },
    { name: 'Helmets', value: 'helmet' },
    { name: 'Jackets', value: 'jacket' },
    { name: 'Gloves', value: 'gloves' },
    { name: 'Boots', value: 'boots' },
    { name: 'Pants', value: 'pants' },
    { name: 'Goggles', value: 'goggles' },
    { name: 'Spare Visors', value: 'Spare Visors' }
  ];

const allProducts = [
    { id: 1, name: 'Pro Racing Helmet', price: 3999, image: 'helmet.jpg', category: 'helmet' ,rating: 3.9, },
    { id: 2, name: 'Leather Rider Jacket', price: 10499, image: 'jacket.jpg', category: 'jacket', rating: 4.5, features: ['Premium leather', 'Armor included'] },
    { id: 3, name: 'Carbon Fiber Gloves', price: 11299, image: 'gloves.jpg', category: 'gloves', rating: 4.3 },
    { id: 4, name: 'MIRROR VISOR FOR NINJA ELITE', price: 340, image: 'Visors.png', category: 'Spare Visors', rating: 4.0 },
    { id: 5, name: 'Racing Boots', price: 12999, image: 'boots.jpg', category: 'boots', rating: 4.4 },
    { id: 6, name: 'Riding Pants', price: 10999, image: 'pants.jpg', category: 'pants', rating: 4.2 },
    { id: 7, name: 'Motorcycle Goggles', price: 4999, image: 'goggles.png', category: 'goggles', rating: 3.9 },
    { id: 8, name: 'Hunter DC Superman Helmet', price: 4499, image: 'helmet2.jpg', category: 'helmet', rating: 4.2, features: ['Superman design', 'Lightweight'] },
    { id: 9, name: 'Street Marvel Captain America Helmet', price: 6500, image: 'helmet3.jpg', category: 'helmet', rating: 4.3, features: ['Captain America theme', 'Aerodynamic'] },
    { id: 10, name: 'Hunter Turbo Helmet', price: 3770, image: 'helmet4.jpg', category: 'helmet', rating: 3.9, features: ['Budget friendly', 'Multiple vents'] },
    { id: 11, name: 'Arai Quantum-X Helmet', price: 8999, image: 'helmet5.png', category: 'helmet', rating: 4.9, features: ['Premium series', 'Ultra light'] },
    { id: 12, name: 'LS2 Valiant II', price: 6999, image: 'helmet6.png', category: 'helmet', rating: 4.6, features: ['Modular design', 'Pinlock ready'] },
    { id: 13, name: 'Axor Nimbuz Jacket', price: 6470, image: 'jacket2.png', category: 'jacket', rating: 4.8, features: ['Premium leather', 'Armor included'] },
    { id: 14, name: 'Axor Thermal Black Jacket', price: 1295, image: 'jacket3.png', category: 'jacket', rating: 4.6, features: ['Premium leather', 'Armor included'] },
    { id: 15, name: 'Axor X Boy Jacket', price: 1285, image: 'jacket4.png', category: 'jacket', rating: 4.1, features: ['Premium leather', 'Armor included'] },
    { id: 16, name: 'Axor Motorcycle Goggles P101', price: 1097, image: 'goggles1.png', category: 'goggles', rating: 4.4 },
    { id: 17, name: 'Motorcycle Goggles P102 Brown', price: 1097, image: 'goggles2.png', category: 'goggles', rating: 4.2 },
    { id: 18, name: 'Motorcycle Goggles P104 BLACK', price: 1999, image: 'goggles3.png', category: 'goggles', rating: 4.9 },
    { id: 19, name: 'Axor Airstream Riding Gloves', price: 1646, image: 'gloves1.png', category: 'gloves', rating: 4.6 },
    { id: 20, name: 'Axor Gator Riding Gloves', price: 2384, image: 'gloves2.png', category: 'gloves', rating: 4.4 },
    { id: 21, name: 'Axor Sela Waterproof Riding Gloves', price: 11299, image: 'gloves3.png', category: 'gloves', rating: 4.6 },
    { id: 22, name: 'Axor Lycan Riding Gloves', price: 3680, image: 'gloves4.png', category: 'gloves', rating: 4.7 },
    { id: 23, name: 'Axor Slicks Riding Boots', price: 7730, image: 'boots1.png', category: 'boots', rating: 4.6 },
    { id: 24, name: 'Axor Kaza Riding Boots', price: 10700, image: 'boots2.png', category: 'boots', rating: 4.7 },
    { id: 25, name: 'Axor Kaza Riding Boots', price: 10999, image: 'boots3.png', category: 'boots', rating: 4.5 },
    { id: 26, name: 'Axor Slicks Riding Boots', price: 8999, image: 'boots4.png', category: 'boots', rating: 4.2 },
    { id: 27, name: 'RAINBOW VISOR FOR THUNDER', price: 355, image: 'Visors1.png', category: 'Spare Visors', rating: 4.0 },
    { id: 28, name: 'CLEAR VISOR FOR THUNDER', price: 325, image: 'Visors2.png', category: 'Spare Visors', rating: 4.0 },
  ];

  const filteredProducts = category 
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  const handleCategoryChange = (catValue) => {
    setSearchParams(catValue ? { category: catValue } : {});
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={cart.length} />
      
      {/* Minimalist Category Navigation */}
      <div className="container py-4">
        <div className="category-nav">
          <div className="d-flex justify-content-between">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`category-nav-btn ${
                  category === cat.value ? 'active' : ''
                }`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products pb-5">
        <div className="container">
          <div className="row g-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;