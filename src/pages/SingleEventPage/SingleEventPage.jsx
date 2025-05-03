import Header from "../../components/Header/Header"
import SingleEventInfo from "../../components/SingleEventInfo/SingleEventInfo"
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import useCartStore from "../../stores/useCartStore";

function SingleEventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { data: events, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');
    const [quantity, setQuantity] = useState(1);
    const { increase, decrease, addToCart } = useCartStore();

    useEffect(() => {
        if(id && events) {
            const found = events.find(e => e.id === id);
            setEvent(found);
        }
    }, [id, events]);

    const handleAddToCart = () => {
      if (event && quantity > 0) {
        addToCart(event, quantity);
        setQuantity(0); // återställ räknaren
      }
    };

  return (
    <section className="single-event-page page">
        <Header title="Event"/>
        { event && <SingleEventInfo event={event}/> }
        { event && <Counter 
        event={event} 
        quantity={quantity}
        increase={() => setQuantity(q => q + 1)}
        decrease={() => setQuantity(q => Math.max(0, q - 1))}
        /> }
        <Button onClick={handleAddToCart} text="Lägg i varukorgen"/>
    </section>
  )
}

export default SingleEventPage