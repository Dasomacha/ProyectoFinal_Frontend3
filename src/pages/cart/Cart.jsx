// src/pages/cart/Cart.jsx
import React from 'react';
import { useCart } from '../../context/CartContext'; // Importa el hook del contexto
import CartItem from '../../components/CartItem'; // Importa el componente CartItem

const Cart = () => {
  const { cart } = useCart(); // Obtén el estado del carrito desde el contexto

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Cart;

