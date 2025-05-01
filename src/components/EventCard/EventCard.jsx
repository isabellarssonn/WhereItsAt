import "./eventCard.css"
import { Link } from "react-router-dom"

function EventCard({ event }) {
  return (
    <>
      <Link to={"/event/" + event.id} className='event__link'>
        <article className='eventcard'>
          <div className='event__first-column'>
            <p className='event__date'>{event.when.date.split(' ')[0]} <br></br> {event.when.date.split(' ')[1].slice(0, 3).toUpperCase()}</p>
          </div>
          <div className='event__second-column'>
            <h2 className='event__name'>{event.name}</h2>
            <p className='event__where'>{event.where}</p>
          <div className='event__info'>
            <p className='event__time'>{event.when.from} - {event.when.to}</p>
            <p className='event__price'>{event.price} sek</p>
          </div>
          <hr className="single-line"></hr>
          </div>
      </article>
    </Link>
    </>
  )
}

export default EventCard