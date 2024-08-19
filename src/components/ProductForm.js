import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({ id: '', name: '', quantity: '', stock: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ id: '', name: '', quantity: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={product.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="number"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Cantidad"
        required
      />
      <input
        type="number"
        name="Stock"
        value={product.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
