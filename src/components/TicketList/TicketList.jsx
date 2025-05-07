import "./ticketList.css"
import TicketCard from "../TicketCard/TicketCard";

function TicketList() {
  const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

  return (
    <section className="ticketlist">
      {storedTickets
        .filter((ticket) => ticket.ticketId && ticket.name)
        .map((ticket) => (
          <TicketCard key={ticket.ticketId} event={ticket} />
        ))}
    </section>
  );
}

export default TicketList;
