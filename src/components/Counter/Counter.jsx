import "./counter.css"

function Counter({ event }) {
  return (
    <section className="counter">
        <p className="single-event__price">{event.price}</p>
    </section>
  )
}

export default Counter