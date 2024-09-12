import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const productos = [
    { id: 1, nombre: 'Notebook Gamer ASUS', precio: '$1500' },
    { id: 2, nombre: 'MacBook Air M1', precio: '$1200' },
    { id: 3, nombre: 'Accesorio: Mouse Logitech', precio: '$50' }
  ];

  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

