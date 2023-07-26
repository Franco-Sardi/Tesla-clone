import './product.css';
import { useSetRecoilState } from 'recoil';
import { cartState } from '../../Global-State/cartItems';

export default function Product(product) {
  const { image, title, description, price } = product;
  const setCart = useSetRecoilState(cartState);

  function addToCart() {
    setCart((prevCart) => [
      ...prevCart,
      product
    ]);
  }

  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((item) => item !== product));
  }

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button onClick={addToCart} className="product-button">Add To Cart</button>
      <button onClick={removeFromCart} className="product-button">Remove from Cart</button>
    </div>
  );
}