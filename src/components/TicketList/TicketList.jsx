import useCartStore from "../../stores/useCartStore";
import TicketCard from "../TicketCard/TicketCard";
import { v4 as uuidv4 } from "uuid";

function TicketList() {
  const { cart } = useCartStore();

  return (
    <section className="ticketlist">
      {cart.flatMap((event) =>
        Array.from({ length: event.quantity }, () => {
          const ticketId = uuidv4().slice(0, 5).toUpperCase();
          return (
            <TicketCard event={event} key={ticketId} ticketId={ticketId} />
          );
        })
      )}
    </section>
  );
}

export default TicketList;
