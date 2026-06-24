import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CreatePoll from "./pages/CreatePoll"
import ViewMyPolls from "./pages/MyPolls"
import ViewPollDetails from "./pages/PollDetails"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/poll/create" element={<CreatePoll />}/>
        <Route path="/mypolls" element={<ViewMyPolls />}/>
        <Route path="/poll/:id/:view" element={<ViewPollDetails />}/>
        
      </Routes>
    </>
  )
}

export default App
