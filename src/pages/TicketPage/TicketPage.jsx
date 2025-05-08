import "./ticketPage.css";
import TicketList from "../../components/TicketList/TicketList";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

function TicketPage() {

  useEffect(() => {
    document.body.classList.add("ticket-page-background");
    document.body.classList.add("ticket-page-header");

    return () => {
      document.body.classList.remove("ticket-page-background");
      document.body.classList.remove("ticket-page-header");
    };
  }, []);

  return (
    <section className="ticket-page page">
      <Header title="Biljetter" />
        <TicketList />
    </section>
  );
}

export default TicketPage;