import "./eventCard.css"
import { Link } from "react-router-dom"

function EventCard({ event }) {
  return (
    <>
      <Link to={`/event/${event.id}`} className='event-link'>
        <article className='eventcard'>
          <div className='event__first-column'>
            <p className='event-date'>{event.when.date.split(' ')[0]} <br></br> {event.when.date.split(' ')[1].slice(0, 3).toUpperCase()}</p>
          </div>
          <div className='event__second-column'>
            <h2 className='event-name'>{event.name}</h2>
            <p className='event-where'>{event.where}</p>
          <div className='event-info'>
            <p className='event-time'>{event.when.from} - {event.when.to}</p>
            <p className='event-price'>{event.price} sek</p>
          </div>
          <hr></hr>
          </div>
      </article>
    </Link>
    </>
  )
}

export default EventCard