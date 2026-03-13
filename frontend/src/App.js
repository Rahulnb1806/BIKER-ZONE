import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Upload from './pages/Upload'
import Comment from './pages/Comment'
import './App.css';
import Update from './pages/Update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </Router>
  );
}

export default App;