import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main>
        <ProductForm addProduct={addProduct} />
        <ProductTable products={products} />
      </main>
    </div>
  );
};

export default Dashboard;
