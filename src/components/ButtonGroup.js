import React from 'react';

const ButtonGroup = ({ onAdd, onEdit, onDelete }) => {
  return (
    <div className="button-group">
      <button onClick={onAdd}>Agregar</button>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default ButtonGroup;
