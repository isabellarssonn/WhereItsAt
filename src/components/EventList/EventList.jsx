import EventCard from "../EventCard/EventCard"

function EventList({ events }) {
  return (
    <section className="eventlist">
        { events.map(event => {
            return <EventCard 
                event={ event }
                key={ event.id } 
                />
        })
      }
    </section>
  )
}

export default EventList