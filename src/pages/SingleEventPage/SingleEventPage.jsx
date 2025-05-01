import Header from "../../components/Header/Header"
import SingleEventInfo from "../../components/SingleEventInfo/SingleEventInfo"
import Counter from "../../components/Counter/Counter";
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";

function SingleEventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { data: events, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');

    useEffect(() => {
        if(id && events) {
            const found = events.find(e => e.id === id);
            setEvent(found);
        }
    }, [id, events]);

  return (
    <section className="single-event-page page">
        <Header title="Event"/>
        { event && <SingleEventInfo event={event}/> }
        { event && <Counter event={event}/> }
    </section>
  )
}

export default SingleEventPage