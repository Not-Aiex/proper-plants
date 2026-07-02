import { useState } from "react";
import PLANTS from "./data";

import Plants from "./Plant/plants";
import Cart from "./Cart/cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    const item = cart.find((tempItem) => tempItem.id === plant.id);
    if (item) {
      setCart(
        cart.map((newItem) =>
          newItem.id === plant.id
            ? { ...newItem, quantity: newItem.quantity + 1 }
            : newItem,
        ),
      );
    } else {
      const newItem = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item) => {
    setCart(
      cart
        .map((newItem) =>
          newItem.id === item.id
            ? { ...newItem, quantity: newItem.quantity - 1 }
            : newItem,
        )
        .filter((newItem) => newItem.quantity > 0),
    );
  };
  return (
    <>
      <h2>Proper Plants</h2>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
