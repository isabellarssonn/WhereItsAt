import "./ticketList.css";
import TicketCard from "../TicketCard/TicketCard";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(stored);
  }, []);

  return tickets.length === 0 ? (
    <>
      <p className="empty-order__text">Du har inga biljetter än.</p>
      <Link to="/event">
        <Button text="Beställ här" />
      </Link>
    </>
  ) : (
    <section className="ticketlist">
      {tickets
        .filter((ticket) => ticket.ticketId && ticket.name)
        .map((ticket) => (
          <TicketCard key={ticket.ticketId} event={ticket} />
        ))}
    </section>
  );
}

export default TicketList;