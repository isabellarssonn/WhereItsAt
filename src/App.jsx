import LandingPage from "./pages/LandingPage/LandingPage"
import EventPage from "./pages/EventPage/EventPage"
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage"
import CartPage from "./pages/CartPage/CartPage"
import TicketPage from "./pages/TicketPage/TicketPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import NavSwiper from "./components/NavSwiper/NavSwiper"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path : '/',
    element : 
    <>
    <NavSwiper />
    <LandingPage/>
    </>,
    errorElement: <ErrorPage />
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
    path : '/tickets',
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