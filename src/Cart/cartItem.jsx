import CartQuantity from "./cartQuantity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li class="cart">
      <a>{item.name}</a>
      <a>{item.image}</a>
      <CartQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
