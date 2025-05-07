import "./ticketPage.css";
import TicketList from "../../components/TicketList/TicketList";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TicketPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    document.body.classList.add("ticket-page-background");
    document.body.classList.add("ticket-page-header");

    return () => {
      document.body.classList.remove("ticket-page-background");
      document.body.classList.remove("ticket-page-header");
    };
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(stored);
  }, []);

  return (
    <section className="ticket-page page">
      <Header title="Biljetter" />
      {tickets.length === 0 ? (
        <>
          <p className="empty-order__text">Du har inga biljetter än.</p>
          <Link to="/event">
            <Button text="Beställ här" />
          </Link>
        </>
      ) : (
        <>
          <TicketList />
        </>
      )}
    </section>
  );
}

export default TicketPage;