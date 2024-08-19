import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductTable from '../components/ProductTable';
import ButtonGroup from '../components/ButtonGroup';

const Products = () => {
  return (
    <div className="products">
      <Header />
      <Sidebar />
      <div className="products-content">
        <ButtonGroup />
        <ProductTable />
      </div>
    </div>
  );
};

export default Products;