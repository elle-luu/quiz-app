import { useNavigate } from "react-router-dom"
import React from "react"
import logo from "../assets/start_logo.png"

const Landing = () => {
  const navigate = useNavigate();
  
    return (
      

      <div className="landing-container">
        <div className="hero-contain">
        <img src={logo} alt="App Logo" className="app-logo" />
        <h1 className="app-name">
          QuizLab
        </h1>
        <button className="start-btn" onClick={() => navigate("/dashboard")}>
          Start Quiz
        </button>
        </div>
        </div>
    ) 

  
  
}




export default Landing