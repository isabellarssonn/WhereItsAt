import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import EventPage from "./pages/EventPage/EventPage"
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage"
import CartPage from "./pages/CartPage/CartPage"
import TicketPage from "./pages/TicketPage/TicketPage"
import NavSwiper from "./components/NavSwiper/NavSwiper"

const router = createBrowserRouter([
  {
    path : '/',
    element : 
    <>
    <NavSwiper />
    <LandingPage/>
    </>
  },
  {
    path : '/event',
    element : 
    <>
    <NavSwiper />
    <EventPage />
    </>
  },
  {
    path: '/event/:id',
    element : <SingleEventPage />
  },
  {
    path: '/cart',
    element : <CartPage />
  },
  {
    path : '/orders',
    element : 
    <>
    <NavSwiper />
    <TicketPage />
    </>
  }
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App