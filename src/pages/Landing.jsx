import { useNavigate } from "react-router-dom"
import React from "react"
import logo from "../assets/start_logo.png"

const Landing = () => {
  const navigate = useNavigate();

  return (
    // 1. Container: Use min-h-screen to cover the whole screen and justify-center/items-center to place content in the middle.
    <div className="h-screen w-screen flex flex-col items-center justify-between font-poppins bg-[#959BB5] py-16 px-4 overflow-hidden">
      
      {/* 2. Top Section: App Name and Logo Container */}
      <div className="flex flex-col items-center gap-10">
        
        {/* 3. Title: "QuizLab" - Made bold and blue-purple, with slight tracking (letter-spacing). */}
        <h1 className="text-6xl font-extrabold text-[#3A3E6C] tracking-tight">
          QuizLab
        </h1>

        {/* 4. Logo: The brain icon - Tailwind's aspect-auto helps maintain shape, and drop-shadow simulates the shadow in the image. */}
        <img 
          src={logo} 
          alt="Quiz Brain Icon" 
          className="w-80 h-auto aspect-auto drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] shdow-blue-900/60"
        />
      </div>

      {/* 5. Space between logo and button */}
      <div className="h-28" />

      {/* 6. Start Button: Using rounded-full for pill shape, dark blue background, and light text. The hover state adds interactivity. */}
      <button 
        // This line fixes the navigation issue you had on line 42 of image_5.png
        onClick={() => navigate('/dashboard')} 
        className="px-12 py-5 text-2xl font-bold text-white bg-[#3A3E6C] rounded-full transition-transform hover:bg-[#656A9E] scale-105"
      >
        Start Quiz
      </button>

    </div>
  );
  
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