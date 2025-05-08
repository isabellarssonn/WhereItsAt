import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function SubmitOrder({ cart, clearCart }) {
    const navigate = useNavigate();
    const sections = ["A", "B", "C", "D", "E", "F", "G"];
    const maxSeats = 350; 

    const generateTickets = (cart) => {
        const tickets = [];
        
        cart.forEach((item) => {
            const { quantity, ...eventData } = item;

            const eventSection = sections[Math.floor(Math.random() * sections.length)];

            let currentSeat = Math.floor(Math.random() * maxSeats) + 1;

            for (let i = 0; i < quantity; i++) {
                tickets.push({
                    ...eventData,
                    ticketId: uuidv4().slice(0, 5).toUpperCase(),
                    section: eventSection,
                    seat: currentSeat,
                });
                currentSeat++;
            }
        });

        return tickets
    };

    const handleSubmitOrder = () => {
        const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        
        const newTickets = generateTickets(cart);

        const updatedTickets = [...storedTickets, ...newTickets];

        localStorage.setItem("tickets", JSON.stringify(updatedTickets));

        clearCart();
        navigate("/tickets");
    };

  return (
    <Button text="Skicka order" onClick={handleSubmitOrder} />
  )
}

export default SubmitOrder