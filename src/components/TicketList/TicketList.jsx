import useCartStore from "../../stores/useCartStore"
import TicketCard from "../TicketCard/TicketCard";

function TicketList() {
    const { cart } = useCartStore();

  return (
    <section className='ticketlist'>
        { cart.map(event => {
            return <TicketCard
                event={ event }
                key={ event.id }
                />
        })}
    </section>
  )
}

export default TicketList