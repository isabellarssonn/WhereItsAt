import "./cartPage.css"
import useCartStore from "../../stores/useCartStore";
import Header from "../../components/Header/Header";
import CancelButton from "../../components/CancelButton/CancelButton";
import Button from "../../components/Button/Button";
import CartList from "../../components/CartList/CartList";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useCartStore();
  console.log("Varukorgens innehåll i CartPage:", cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page page">
      <Link to="/event">
        <CancelButton />
      </Link>
      <Header title="Order" />

      {cart.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        
        <>
          <CartList />
            <section className="order-sum">
            <p className="order-sum__text">Totalt värde på order</p>
            <p className="order-sum__price">{totalPrice} sek</p>
            </section>
            <Link to={"/tickets"}>
              <Button text="Skicka order"/>
            </Link>
          
        </>
      )}
    </section>
  );
}

export default CartPage;
