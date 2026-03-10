import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
// BUG FIXED: removed unused `useState` and `logo` imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  )
}

export default App