import "./ticketCard.css"

function TicketCard({ event, ticketId }) {
  return (
    <article className='ticketcard'>
        <div className='what-section'>
            <p className='ticket__info'>What</p>
            <h2 className='ticket__name'>{event.name}</h2>
        </div>
        <div className='where-section'>
            <p className='ticket__info'>Where</p>
            <h3 className='ticket__where'>{event.where}</h3>
        </div>
        <div className='date-section'>
            <div className='when-section'>
                <p className='ticket__info'>When</p>
                <p className='ticket__when'>
                    {(() => {
                        const [day, month] = event.when.date.split(" ");
                        return day + " " + month.slice(0, 3);
                    })()}
                </p>
            </div>
            <div className='from-section'>
                <p className='ticket__info'>From</p>
                <p className='ticket__from'>{event.when.from}</p>
            </div>
            <div className='to-section'>
                <p className='ticket__info'>To</p>
                <p className='ticket__to'>{event.when.to}</p>
            </div>
        </div>
        <div className='info-section'>
            <p className='ticket__info'>Info</p>
            <p className='ticket__seat'>Section D - seat 326</p>
        </div>
        <div className='barcode-section'>
            <p className='ticket__barcode'>{ticketId}</p>
            <p className='ticket__id'>#{ticketId}</p>
        </div>
    </article>
  )
}

export default TicketCard