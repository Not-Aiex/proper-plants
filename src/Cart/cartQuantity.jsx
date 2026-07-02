export default function CartQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div>
      <button onClick={() => removeFromCart(item)}>-1</button>
      <p>{item.quantity}</p>
      <button onClick={() => addToCart(item)}>+1</button>
    </div>
  );
}
