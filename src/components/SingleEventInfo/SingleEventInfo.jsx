import "./singleEventInfo.css"

function SingleEventInfo({ event }) {
  return (
    <section className='single-event__info'>
        <p className='single-event__subtitle'>You are about to score some tickets to</p>
        <h2 className='single-event__name'>{event.name}</h2>
        <p className='single-event__when'>{event.when.date.toLowerCase()} kl {event.when.from} - {event.when.to}</p>
        <p className='single-event__where'>@ {event.where}</p>
    </section>
  )
}

export default SingleEventInfo