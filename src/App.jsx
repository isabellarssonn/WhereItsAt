import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import EventPage from "./pages/EventPage/EventPage"
import OrderPage from "./pages/OrderPage/OrderPage"
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
    path : '/orders',
    element : 
    <>
    <NavSwiper />
    <OrderPage />
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