import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Home from "./components/home/Home"
import Logout from "./components/logout/Logout"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100">

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>


    </>
  )
}

export default App
