import "./ticketPage.css"
import TicketList from "../../components/TicketList/TicketList";
import Header from "../../components/Header/Header";

function TicketPage() {

  return (
    <section className='ticket-page--special'>
      <Header title="Biljetter"/>
      <TicketList />
    </section>
  )
}

export default TicketPage