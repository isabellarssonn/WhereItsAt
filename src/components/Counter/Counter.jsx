import "./counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Counter({ event, quantity, setQuantity }) {

  return (
    <section className="counter-wrapper">
      <p className="counter__price">{event.price * quantity} sek</p>
      <div className="counter-container">
        <FontAwesomeIcon icon={faMinus} className="decrease-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))} />
          <p className="quantity">{quantity}</p>
        <FontAwesomeIcon icon={faPlus} className="increase-btn" onClick={() => setQuantity(quantity + 1)} />
      </div>
    </section>
  );
}

export default Counter;
