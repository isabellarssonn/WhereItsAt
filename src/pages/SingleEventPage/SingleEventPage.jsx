import Header from "../../components/Header/Header"
import SingleEventInfo from "../../components/SingleEventInfo/SingleEventInfo"
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import useCartStore from "../../stores/useCartStore";
import CancelButton from "../../components/CancelButton/CancelButton";
import { useParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";

function SingleEventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { data: events } = useFetch('https://santosnr6.github.io/Data/events.json');
    const [quantity, setQuantity] = useState(1); // Här har vi kvar vår quantity state
    const { addToCart } = useCartStore(); // anropa addToCart från useCartStore

    useEffect(() => {
        if (id && events) {
            const found = events.find(e => e.id === id);
            setEvent(found);
        }
    }, [id, events]);

    const handleAddToCart = () => {
        if (event && quantity > 0) {
            addToCart(event, quantity); // Skickar event och quantity till store
            console.log("Skickar till cart:", event, "Antal:", quantity);
        }
    };    

  return (
    <section className="single-event-page page">
        <Link to="/event">
          <CancelButton />
        </Link>
        <Header title="Event"/>
        { event && <SingleEventInfo event={event}/> }
        { event && (
            <Counter 
                event={event} 
                quantity={quantity}
                setQuantity={setQuantity} // Skicka setQuantity till Counter
            />
        )}
        <Button onClick={handleAddToCart} text="Lägg i varukorgen"/>
    </section>
  )
}

export default SingleEventPage;