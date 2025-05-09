import Header from "../../components/Header/Header"
import SingleEventInfo from "../../components/SingleEventInfo/SingleEventInfo"
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import useCartStore from "../../stores/useCartStore";
import CancelButton from "../../components/CancelButton/CancelButton";
import { useParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

function SingleEventPage() {
    const { id } = useParams();
    const { data: events } = useFetch('https://santosnr6.github.io/Data/events.json');
    const event = events?.find(e => e.id === id);
    const { addToCart } = useCartStore(); 
    const [quantity, setQuantity] = useState(1); 

    const handleAddToCart = () => {
        if (event && quantity > 0) {
            addToCart(event, quantity); 
        }
    };    

  return (
    <section className="single-event-page page">
        <Link to="/event" aria-label="cancel-button">
          <CancelButton />
        </Link>
        <Header title="Event"/>
        { event && <SingleEventInfo event={event}/> }
        { event && (
            <Counter 
                event={event} 
                quantity={quantity}
                setQuantity={setQuantity} 
            />
        )}
        <Button onClick={handleAddToCart} text="Lägg i varukorgen"/>
    </section>
  )
}

export default SingleEventPage;