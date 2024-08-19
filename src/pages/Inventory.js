import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductTable from '../components/ProductTable';
import ButtonGroup from '../components/ButtonGroup';
import ProductForm from '../components/ProductForm';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAdd = () => setIsFormVisible(true);
  const handleEdit = () => { /* Lógica para editar */ };
  const handleDelete = () => { /* Lógica para eliminar */ };

  const handleSaveProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setIsFormVisible(false);
  };

  return (
    <div className="inventory">
      <Header />
      <Sidebar />
      <div className="inventory-content">
        {isFormVisible ? (
          <ProductForm onSave={handleSaveProduct} />
        ) : (
          <>
            <ButtonGroup onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />
            <ProductTable products={products} />
          </>
        )}
      </div>
    </div>
  );
};

export default Inventory;