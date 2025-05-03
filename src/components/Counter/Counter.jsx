import "./counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function Counter({ event, quantity, increase, decrease }) {
  return (
    <section className="counter-wrapper">
        <p className="counter__price">{event.price * quantity} sek</p>
        <div className="counter-container">
          <button className="decrease-btn" onClick={decrease}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="quantity">{quantity}</p>
          <button className="increase-btn" onClick={increase}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
    </section>
  )
}

export default Counter