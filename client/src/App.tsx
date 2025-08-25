import GetStarted from "./Components/getstarted"
import ChatInterface from "./Components/ChatInterface"

import { Routes, Route } from "react-router-dom"
import ThemeToggle from "./Components/themetoggle.tsx"
function App() {

  return (
    <>
    <Routes>
      <Route  path="/" element={<GetStarted />}/> 
      <Route  path="/chat" element={<ChatInterface />}/> 
    </Routes>
     
    </>
  )
}

export default App
