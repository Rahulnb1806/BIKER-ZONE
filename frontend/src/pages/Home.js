import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => {
  const [positions, setPositions] = useState([]);
  const [dragging, setDragging] = useState(null);
  const containerRef = useRef(null);

  const productImages = [
    'helmet.jpg','helmet2.jpg','helmet3.jpg','helmet4.jpg',
    'jacket.jpg','jacket2.png','jacket3.png','jacket4.png',
    'goggles.jpg','goggles1.png','goggles2.png','goggles3.png',
    'Visors.png','Visors1.png','Visors2.png',
    'boots.jpg','boots1.png','boots2.png','boots3.png',
    'pants.jpg',
    'gloves.jpg','gloves1.png','gloves2.png','gloves3.png','gloves4.png',
    
    
  ];

  // Initialize positions
  useEffect(() => {
    const initialPositions = productImages.map(() => ({
      x: Math.random() * 80,
      y: Math.random() * 80,
      rotation: Math.random() * 20 - 10
    }));
    setPositions(initialPositions);

    const moveRandomly = () => {
      setPositions(prev => prev.map(pos => 
        dragging === null ? {
          ...pos,
          x: Math.max(0, Math.min(80, pos.x + (Math.random() * 2 - 1))),
          y: Math.max(0, Math.min(80, pos.y + (Math.random() * 2 - 1))),
          rotation: pos.rotation + (Math.random() * 2 - 1)
        } : pos
      ));
    };

    const interval = setInterval(moveRandomly, 100);
    return () => clearInterval(interval);
  }, [dragging]);

  const handleMouseDown = (index, e) => {
    setDragging(index);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (dragging === null) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPositions(prev => prev.map((pos, i) => 
      i === dragging ? { 
        ...pos, 
        x: Math.max(0, Math.min(80, x)),
        y: Math.max(0, Math.min(80, y))
      } : pos
    ));
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={0} />
      
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>TEXTURE EVERY RIDE BEGINS<br />WITH THE RIGHT GEAR</h1>
          <Link to="/products" className="btn btn-shop-now">SHOP NOW</Link>
        </div>
      </section>

      {/* Moving Products Section - No Categories */}
      <section 
        className="moving-products-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {productImages.map((image, index) => (
          <div 
            key={index}
            className="moving-product"
            style={{
              left: `${positions[index]?.x || 0}%`,
              top: `${positions[index]?.y || 0}%`,
              transform: `rotate(${positions[index]?.rotation || 0}deg)`,
              backgroundImage: `url(/images/${image})`,
              cursor: dragging === index ? 'grabbing' : 'grab',
              zIndex: dragging === index ? 100 : 1
            }}
            onMouseDown={(e) => handleMouseDown(index, e)}
            onTouchStart={(e) => handleMouseDown(index, e.touches[0])}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;