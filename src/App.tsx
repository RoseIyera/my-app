import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home.page';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/*Wrapper */}
      <div className="wrapper">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products">
        <Route index element={<h1>Products</h1>} />
        <Route path=":productId" element={<h1>Product Details</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      </Route>
    </Routes>
        </div>
    </div>
  );
};

export default App;