import "./cartPage.css";
import useCartStore from "../../stores/useCartStore";
import Header from "../../components/Header/Header";
import CancelButton from "../../components/CancelButton/CancelButton";
import Button from "../../components/Button/Button";
import CartList from "../../components/CartList/CartList";
import SubmitOrder from "../../components/SubmitOrder/SubmitOrder";
import { Link } from "react-router-dom";


function CartPage() {
  const { cart, clearCart } = useCartStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page page">
      <Link to="/event">
        <CancelButton />
      </Link>
      <Header title="Order" />

      {cart.length === 0 ? (
        <>
          <p className="empty-cart__text">Varukorgen är tom!</p>
          <Link to="/event">
            <Button text="Beställ här" />
          </Link>
        </>
      ) : (
        <>
          <CartList />
          <section className="order-sum">
            <p className="order-sum__text">Totalt värde på order</p>
            <p className="order-sum__price">{totalPrice} sek</p>
          </section>
          <SubmitOrder cart={cart} clearCart={clearCart} />
        </>
      )}
    </section>
  );
}

export default CartPage;
