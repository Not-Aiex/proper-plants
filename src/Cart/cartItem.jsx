import CartQuantity from "./cartQuantity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li>
      <section>
        {item.name}: {item.image}
      </section>
      <CartQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
