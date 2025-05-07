import "./cartPage.css";
import useCartStore from "../../stores/useCartStore";
import Header from "../../components/Header/Header";
import CancelButton from "../../components/CancelButton/CancelButton";
import Button from "../../components/Button/Button";
import CartList from "../../components/CartList/CartList";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CartPage() {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmitOrder = () => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
  
    const newTickets = cart.flatMap((item) => {
      const { quantity, ...eventData } = item;
  
      return Array.from({ length: quantity }, () => ({
        ...eventData,
        ticketId: uuidv4().slice(0, 5).toUpperCase(),
      }));
    });
  
    const updatedTickets = [...storedTickets, ...newTickets];
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  
    clearCart();
    navigate("/tickets");
  };

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
          <Button text="Skicka order" onClick={handleSubmitOrder} />
        </>
      )}
    </section>
  );
}

export default CartPage;
