import { useCart } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
};

export default Product;