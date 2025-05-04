import "./cartCard.css"
import useCartStore from '../../stores/useCartStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function CartCard({event}) {
    const { cart, addToCart, removeFromCart } = useCartStore();

    const cartItem = cart.find(item => item.id === event.id);
    const quantity = cartItem?.quantity || 1;

  return (
    <article className='cartcard'>
        <div className='cart__info-container'>
            <h2 className='cartcard__name'>{event.name}</h2>
            <p className='cartcard__when'>{event.when.date.toLowerCase()} kl {event.when.from} - {event.when.to}</p>
        </div>
        <div className="cart__counter-container">
        <FontAwesomeIcon icon={faMinus} className="cart__decrease-btn" onClick={() => removeFromCart(event.id)} />
        <p className="cart__quantity">{quantity}</p>
        <FontAwesomeIcon icon={faPlus} className="cart__increase-btn" onClick={() => addToCart(event, 1)} />
      </div>
    </article>
  )
}

export default CartCard



