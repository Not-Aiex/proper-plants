import CartItem from "./cartItem";

import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  if (cart.length === 0) {
    return (
      <section>
        <h2>Cart</h2>
        <p>Cart is empty.</p>
      </section>
    );
  }
  return (
    <section>
      <h2>Cart</h2>
      <>
        <ul className="cart">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      </>
    </section>
  );
}
