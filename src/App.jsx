import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"

const router = createBrowserRouter([
  {
    path : '/',
    element : <LandingPage/>
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